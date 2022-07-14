import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { IMatch, Match } from '../match.model';
import { MatchService } from '../service/match.service';
import { IEvent } from 'app/entities/event/event.model';
import { EventService } from 'app/entities/event/service/event.service';
import { IPosesion } from 'app/entities/posesion/posesion.model';
import { PosesionService } from 'app/entities/posesion/service/posesion.service';

@Component({
  selector: 'jhi-match-update',
  templateUrl: './match-update.component.html',
})
export class MatchUpdateComponent implements OnInit {
  isSaving = false;

  eventsSharedCollection: IEvent[] = [];
  posesionsSharedCollection: IPosesion[] = [];

  editForm = this.fb.group({
    id: [],
    local: [],
    away: [],
    event: [],
    posesion: [],
  });

  constructor(
    protected matchService: MatchService,
    protected eventService: EventService,
    protected posesionService: PosesionService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ match }) => {
      this.updateForm(match);

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const match = this.createFromForm();
    if (match.id !== undefined) {
      this.subscribeToSaveResponse(this.matchService.update(match));
    } else {
      this.subscribeToSaveResponse(this.matchService.create(match));
    }
  }

  trackEventById(_index: number, item: IEvent): number {
    return item.id!;
  }

  trackPosesionById(_index: number, item: IPosesion): number {
    return item.id!;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IMatch>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(match: IMatch): void {
    this.editForm.patchValue({
      id: match.id,
      local: match.local,
      away: match.away,
      event: match.event,
      posesion: match.posesion,
    });

    this.eventsSharedCollection = this.eventService.addEventToCollectionIfMissing(this.eventsSharedCollection, match.event);
    this.posesionsSharedCollection = this.posesionService.addPosesionToCollectionIfMissing(this.posesionsSharedCollection, match.posesion);
  }

  protected loadRelationshipsOptions(): void {
    this.eventService
      .query()
      .pipe(map((res: HttpResponse<IEvent[]>) => res.body ?? []))
      .pipe(map((events: IEvent[]) => this.eventService.addEventToCollectionIfMissing(events, this.editForm.get('event')!.value)))
      .subscribe((events: IEvent[]) => (this.eventsSharedCollection = events));

    this.posesionService
      .query()
      .pipe(map((res: HttpResponse<IPosesion[]>) => res.body ?? []))
      .pipe(
        map((posesions: IPosesion[]) =>
          this.posesionService.addPosesionToCollectionIfMissing(posesions, this.editForm.get('posesion')!.value)
        )
      )
      .subscribe((posesions: IPosesion[]) => (this.posesionsSharedCollection = posesions));
  }

  protected createFromForm(): IMatch {
    return {
      ...new Match(),
      id: this.editForm.get(['id'])!.value,
      local: this.editForm.get(['local'])!.value,
      away: this.editForm.get(['away'])!.value,
      event: this.editForm.get(['event'])!.value,
      posesion: this.editForm.get(['posesion'])!.value,
    };
  }
}
