import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatchService } from 'src/app/services/match/match.service';
import { Match } from 'src/app/services/match/match.model';
import { TeamService } from 'src/app/services/team/team.service';
import { Team } from 'src/app/services/team/team.model';
import { HttpResponse } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-matchesnew',
  templateUrl: './matchesnew.page.html',
  styleUrls: ['./matchesnew.page.scss'],
})
export class MatchesNewPage implements OnInit {
  isSaving = false;
  private match: FormGroup;
  teams?: Team[];
  isSubmitted = false;
  fecha = new Date(new Date().setHours(new Date().getHours() + 26));
  defaultDate: string = this.fecha.toISOString();

  constructor(
    public matchService: MatchService,
    public teamService: TeamService,
    public navController: NavController,
    public toastController: ToastController,
    private router: Router,
    public translateService: TranslateService,
    protected fb: FormBuilder
  ) {
    this.match = this.fb.group(
      {
        local: ['', [Validators.required]],
        visitante: ['', [Validators.required]],
        fecha: ['', [Validators.required]],
      },
      {
        validators: this.validarQueNoSeanIguales,
      }
    );
    this.teamService.get().subscribe({
      next: (res: HttpResponse<Team[]>) => {
        this.teams = res.body ?? [];
      },
    });
  }

  ngOnInit() {}

  validarQueNoSeanIguales: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const local = control.get('local');
    const visitante = control.get('visitante');

    return local.value != visitante.value ? null : { SonIguales: true };
  };

  checarSiNoSonIguales(): boolean {
    return this.match.hasError('SonIguales') && this.match.get('local').dirty && this.match.get('visitante').dirty;
  }

  get errorControl() {
    return this.match.controls;
  }

  async save() {
    const toastCreado = await this.toastController.create({
      message: 'El partido ha sido creado',
      duration: 2000,
      position: 'top',
      color: 'light',
    });
    this.isSaving = true;
    this.isSubmitted = true;
    if (!this.match.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      const date = this.stringToDate(this.match.value['fecha']);
      const eqlocal = this.teams.find(item => item.name === this.match.value['local']);
      const visit = this.teams.find(item => item.name === this.match.value['visitante']);

      toastCreado.present();

      const match = this.createFrom(date, eqlocal.id, visit.id);

      this.subscribeToSaveResponse(this.matchService.create(match));
      if (this.isSubmitted) {
        this.router.navigate(['/tabs/matches']);
      }
    }
  }

  protected subscribeToSaveResponse(result: Observable<ArrayBuffer>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected createFrom(fecha, localId, awayId): Match {
    return {
      ...new Match(),
      localId: localId,
      awayId: awayId,
      matchDay: fecha,
    };
  }
  protected stringToDate(dateFromIonDatetime): Date {
    //const dateFromIonDatetime = this.match.value['fecha']; //2022-08-18T22:48:00+02:00
    const [dateComponents, hora] = dateFromIonDatetime.split('T');
    const [timeComponents] = hora.split('+');
    const [year, month, day] = dateComponents.split('-');
    const [hours, minutes, seconds] = timeComponents.split(':');
    const date = new Date(+year, +month - 1, +day, +hours + 2, +minutes, +seconds);
    return date;
  }
  protected onSaveSuccess(): void {}

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {}
}
