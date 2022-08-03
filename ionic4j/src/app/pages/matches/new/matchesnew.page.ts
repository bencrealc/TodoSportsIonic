import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/services/events/events.service';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match/match.service';
import { Match } from 'src/app/services/match/match.model';
import { TeamService } from 'src/app/services/team/team.service';
import { Team } from 'src/app/services/team/team.model';
import { format, parseISO } from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-matchesnew',
  templateUrl: './matchesnew.page.html',
  styleUrls: ['./matchesnew.page.scss'],
})
export class MatchesNewPage implements OnInit {
  isSaving = false;
  private match: FormGroup;
  teams?: Team[];

  constructor(
    public matchService: MatchService,
    public teamService: TeamService,
    public navController: NavController,
    public toastController: ToastController,
    public translateService: TranslateService,
    protected fb: FormBuilder
  ) {
    this.match = this.fb.group({
      local: [''],
      visitante: [''],
      fecha: [''],
    });
    this.teamService.get().subscribe({
      next: (res: HttpResponse<Team[]>) => {
        this.teams = res.body ?? [];
      },
    });
  }

  ngOnInit() {}
  save(): void {
    this.isSaving = true;

    const date = this.stringToDate(this.match.value['fecha']);
    const eqlocal = this.teams.find(item => item.name === this.match.value['local']);
    const visit = this.teams.find(item => item.name === this.match.value['visitante']);

    const match = this.createFrom(eqlocal, visit, date, eqlocal.id, visit.id);
    console.log(match);
    this.subscribeToSaveResponse(this.matchService.create(match));
  }

  protected subscribeToSaveResponse(result: Observable<ArrayBuffer>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected createFrom(local, visit, fecha, localId, awayId): Match {
    return {
      ...new Match(),
      local: local,
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
