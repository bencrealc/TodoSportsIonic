import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/services/events/events.service';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team/team.service';
import { Team } from 'src/app/services/team/team.model';

@Component({
  selector: 'app-teamCreate',
  templateUrl: './teamCreate.page.html',
  styleUrls: ['./teamCreate.page.scss'],
})
export class TeamCreatePage implements OnInit {
  isSaving = false;
  isSubmitted = false;
  private team: FormGroup;

  constructor(
    public teamService: TeamService,
    public navController: NavController,
    public toastController: ToastController,
    public translateService: TranslateService,
    protected fb: FormBuilder
  ) {
    this.team = this.fb.group({
      name: [''],
    });
  }

  ngOnInit() {
    this.team = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get errorControl() {
    return this.team.controls;
  }

  async save() {
    const toastCreado = await this.toastController.create({
      message: 'El equipo ha sido creado',
      duration: 2000,
      position: 'top',
      color: 'light',
    });
    this.isSaving = true;
    this.isSubmitted = true;
    if (!this.team.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      toastCreado.present();
    }
    const team = this.createFrom(this.team.value['name']);
    this.subscribeToSaveResponse(this.teamService.create(team));
  }

  protected subscribeToSaveResponse(result: Observable<ArrayBuffer>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected createFrom(name): Team {
    return {
      ...new Team(),
      name: name,
    };
  }

  protected onSaveSuccess(): void {}

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {}
}
