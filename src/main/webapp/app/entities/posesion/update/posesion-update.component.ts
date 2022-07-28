import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';

import { IPosesion, Posesion } from '../posesion.model';
import { PosesionService } from '../service/posesion.service';
import { IMatch } from 'app/entities/match/match.model';
import { MatchService } from 'app/entities/match/service/match.service';

@Component({
  selector: 'jhi-posesion-update',
  templateUrl: './posesion-update.component.html',
})
export class PosesionUpdateComponent implements OnInit {
  isSaving = false;

  matchesSharedCollection: IMatch[] = [];

  editForm = this.fb.group({
    id: [],
    team: [],
    start: [],
    end: [],
    match: [],
  });

  constructor(
    protected posesionService: PosesionService,
    protected matchService: MatchService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ posesion }) => {
      if (posesion.id === undefined) {
        const today = dayjs().startOf('day');
        posesion.start = today;
        posesion.end = today;
      }

      this.updateForm(posesion);

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const posesion = this.createFromForm();
    if (posesion.id !== undefined) {
      this.subscribeToSaveResponse(this.posesionService.update(posesion));
    } else {
      this.subscribeToSaveResponse(this.posesionService.create(posesion));
    }
  }

  trackMatchById(_index: number, item: IMatch): number {
    return item.id!;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPosesion>>): void {
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

  protected updateForm(posesion: IPosesion): void {
    this.editForm.patchValue({
      id: posesion.id,
      team: posesion.team,
      start: posesion.start ? posesion.start.format(DATE_TIME_FORMAT) : null,
      end: posesion.end ? posesion.end.format(DATE_TIME_FORMAT) : null,
      match: posesion.match,
    });

    this.matchesSharedCollection = this.matchService.addMatchToCollectionIfMissing(this.matchesSharedCollection, posesion.match);
  }

  protected loadRelationshipsOptions(): void {
    this.matchService
      .query()
      .pipe(map((res: HttpResponse<IMatch[]>) => res.body ?? []))
      .pipe(map((matches: IMatch[]) => this.matchService.addMatchToCollectionIfMissing(matches, this.editForm.get('match')!.value)))
      .subscribe((matches: IMatch[]) => (this.matchesSharedCollection = matches));
  }

  protected createFromForm(): IPosesion {
    return {
      ...new Posesion(),
      id: this.editForm.get(['id'])!.value,
      team: this.editForm.get(['team'])!.value,
      start: this.editForm.get(['start'])!.value ? dayjs(this.editForm.get(['start'])!.value, DATE_TIME_FORMAT) : undefined,
      end: this.editForm.get(['end'])!.value ? dayjs(this.editForm.get(['end'])!.value, DATE_TIME_FORMAT) : undefined,
      match: this.editForm.get(['match'])!.value,
    };
  }
}
