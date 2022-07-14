import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';

import { IPosesion, Posesion } from '../posesion.model';
import { PosesionService } from '../service/posesion.service';

@Component({
  selector: 'jhi-posesion-update',
  templateUrl: './posesion-update.component.html',
})
export class PosesionUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    team: [],
    paused: [],
    time: [],
  });

  constructor(protected posesionService: PosesionService, protected activatedRoute: ActivatedRoute, protected fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ posesion }) => {
      if (posesion.id === undefined) {
        const today = dayjs().startOf('day');
        posesion.time = today;
      }

      this.updateForm(posesion);
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
      paused: posesion.paused,
      time: posesion.time ? posesion.time.format(DATE_TIME_FORMAT) : null,
    });
  }

  protected createFromForm(): IPosesion {
    return {
      ...new Posesion(),
      id: this.editForm.get(['id'])!.value,
      team: this.editForm.get(['team'])!.value,
      paused: this.editForm.get(['paused'])!.value,
      time: this.editForm.get(['time'])!.value ? dayjs(this.editForm.get(['time'])!.value, DATE_TIME_FORMAT) : undefined,
    };
  }
}
