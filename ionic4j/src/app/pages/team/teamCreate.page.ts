import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/services/events/events.service';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { TeamService } from 'src/app/services/team/team.service';
import { Team } from 'src/app/services/team/team.model';
import { AccountService } from 'src/app/services/auth/account.service';
import { Account } from 'src/model/account.model';
import { Router, RouterModule } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-teamCreate',
  templateUrl: './teamCreate.page.html',
  styleUrls: ['./teamCreate.page.scss'],
})
export class TeamCreatePage implements OnInit {
  isSaving = false;
  isSubmitted = false;
  private team: FormGroup;
  account: Account;
  teams?: Team[];

  constructor(
    public teamService: TeamService,
    public navController: NavController,
    public toastController: ToastController,
    public translateService: TranslateService,
    private router: Router,
    private accountService: AccountService,
    private screenOrientation: ScreenOrientation,
    protected fb: FormBuilder
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.teamService.get().subscribe({
      next: (res: HttpResponse<Team[]>) => {
        this.teams = res.body ?? [];
      },
    });
  }

  ngOnInit() {
    this.team = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.accountService.identity().then(account => {
      if (account != null) {
        this.account = account;
      }
    });
  }

  validarQueNoExista: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    console.log(control.get('name').value);
    if (this.teams.filter(x => x.name === control.get('name').value)) {
      return { SonIguales: true };
    } else {
      return { SonIguales: false };
    }
  };
  checarSiExiste(): boolean {
    return this.team.hasError('SonIguales');
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
    const team = this.createFrom(this.team.value['name'], this.account.id);
    this.subscribeToSaveResponse(this.teamService.create(team));

    this.validarQueNoExista(this.team);
    if (this.isSubmitted && this.checarSiExiste() == false) {
      this.router.navigate(['/tabs/teamCreate']);
      this.team.reset();
    }
  }

  protected subscribeToSaveResponse(result: Observable<ArrayBuffer>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected createFrom(name, userId): Team {
    return {
      ...new Team(),
      name: name,
      userId: userId,
    };
  }

  protected onSaveSuccess(): void {}

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {}
}
