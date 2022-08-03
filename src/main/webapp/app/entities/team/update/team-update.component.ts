import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { ITeam, Team } from '../team.model';
import { TeamService } from '../service/team.service';
import { IMatch } from 'app/entities/match/match.model';
import { MatchService } from 'app/entities/match/service/match.service';

@Component({
  selector: 'jhi-team-update',
  templateUrl: './team-update.component.html',
})
export class TeamUpdateComponent implements OnInit {
  isSaving = false;

  matchesSharedCollection: IMatch[] = [];

  editForm = this.fb.group({
    id: [],
    name: [],
    matches: [],
  });

  constructor(
    protected teamService: TeamService,
    protected matchService: MatchService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ team }) => {
      this.updateForm(team);

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const team = this.createFromForm();
    if (team.id !== undefined) {
      this.subscribeToSaveResponse(this.teamService.update(team));
    } else {
      this.subscribeToSaveResponse(this.teamService.create(team));
    }
  }

  trackMatchById(_index: number, item: IMatch): number {
    return item.id!;
  }

  getSelectedMatch(option: IMatch, selectedVals?: IMatch[]): IMatch {
    if (selectedVals) {
      for (const selectedVal of selectedVals) {
        if (option.id === selectedVal.id) {
          return selectedVal;
        }
      }
    }
    return option;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITeam>>): void {
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

  protected updateForm(team: ITeam): void {
    this.editForm.patchValue({
      id: team.id,
      name: team.name,
      matches: team.matches,
    });

    this.matchesSharedCollection = this.matchService.addMatchToCollectionIfMissing(this.matchesSharedCollection, ...(team.matches ?? []));
  }

  protected loadRelationshipsOptions(): void {
    this.matchService
      .query()
      .pipe(map((res: HttpResponse<IMatch[]>) => res.body ?? []))
      .pipe(
        map((matches: IMatch[]) => this.matchService.addMatchToCollectionIfMissing(matches, ...(this.editForm.get('matches')!.value ?? [])))
      )
      .subscribe((matches: IMatch[]) => (this.matchesSharedCollection = matches));
  }

  protected createFromForm(): ITeam {
    return {
      ...new Team(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      matches: this.editForm.get(['matches'])!.value,
    };
  }
}
