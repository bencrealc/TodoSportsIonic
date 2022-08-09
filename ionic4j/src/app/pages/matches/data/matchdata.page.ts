import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { PosesionService } from 'src/app/services/posesion/posesion.service';
import { EventsService } from 'src/app/services/events/events.service';
import { Posesion } from 'src/app/services/posesion/posesion.model';
import { HttpResponse } from '@angular/common/http';
import { Event } from 'src/app/services/events/event.model';

@Component({
  selector: 'app-matchdata',
  templateUrl: './matchdata.page.html',
  styleUrls: ['./matchdata.page.scss'],
})
export class MatchDataPage implements OnInit {
  id;
  eLocal: Event[] = [];
  eAway: Event[] = [];
  pLocal: Posesion[] = [];
  pAway: Posesion[] = [];

  posesionLocal: number = 0;
  posesionAway: number = 0;

  golesLocal: number = 0;
  golesAway: number = 0;

  faltasLocal: number = 0;
  faltasAway: number = 0;

  amarillasLocal: number = 0;
  amarillasAway: number = 0;

  rojasLocal: number = 0;
  rojasAway: number = 0;

  tirosLocal: number = 0;
  tirosAway: number = 0;

  cornerLocal: number = 0;
  cornerAway: number = 0;

  penaltiLocal: number = 0;
  penaltiAway: number = 0;

  offsideLocal: number = 0;
  offsideAway: number = 0;

  users: number = 0;

  constructor(
    public navController: NavController,
    public toastController: ToastController,
    public translateService: TranslateService,
    private route: ActivatedRoute,
    private posesionService: PosesionService,
    private eventService: EventsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.loadAll();
  }

  loadAll(): void {
    this.loadEvents();
    this.loadPosesion();
  }

  loadPosesion(): void {
    this.posesionService.getPosesion('local', this.id).subscribe({
      next: (res: HttpResponse<Posesion[]>) => {
        this.pLocal = res.body ?? [];
        console.log(this.pLocal);
      },
    });

    this.posesionService.getPosesion('away', this.id).subscribe({
      next: (res: HttpResponse<Posesion[]>) => {
        this.pAway = res.body ?? [];
        console.log(this.pAway);
        this.sumPosesion();
      },
    });
  }

  loadEvents(): void {
    this.eventService.getEvents('local', this.id).subscribe({
      next: (res: HttpResponse<Event[]>) => {
        this.eLocal = res.body ?? [];
        console.log(this.eLocal);
        this.golesLocal = this.eLocal.filter(e => e.eventType === 'GOL').length;
        this.faltasLocal = this.eLocal.filter(e => e.eventType === 'FALTA').length;
        this.amarillasLocal = this.eLocal.filter(e => e.eventType === 'AMARILLA').length;
        this.rojasLocal = this.eLocal.filter(e => e.eventType === 'ROJA').length;
        this.tirosLocal = this.eLocal.filter(e => e.eventType === 'TIRO').length;
        this.cornerLocal = this.eLocal.filter(e => e.eventType === 'CORNER').length;
        this.penaltiLocal = this.eLocal.filter(e => e.eventType === 'PENALTI').length;
        this.offsideLocal = this.eLocal.filter(e => e.eventType === 'FUERA_DE_JUEGO').length;
      },
    });

    this.eventService.getEvents('away', this.id).subscribe({
      next: (res: HttpResponse<Event[]>) => {
        this.eAway = res.body ?? [];
        this.golesAway = this.eAway.filter(e => e.eventType === 'GOL').length;
        this.faltasAway = this.eAway.filter(e => e.eventType === 'FALTA').length;
        this.amarillasAway = this.eAway.filter(e => e.eventType === 'AMARILLA').length;
        this.rojasAway = this.eAway.filter(e => e.eventType === 'ROJA').length;
        this.tirosAway = this.eAway.filter(e => e.eventType === 'TIRO').length;
        this.cornerAway = this.eAway.filter(e => e.eventType === 'CORNER').length;
        this.penaltiAway = this.eAway.filter(e => e.eventType === 'PENALTI').length;
        this.offsideAway = this.eAway.filter(e => e.eventType === 'FUERA_DE_JUEGO').length;
      },
    });

    this.eventService.getUsers(this.id).subscribe({
      next: (res: HttpResponse<number>) => {
        this.users = res.body ?? 0;
        console.log(this.users);
        this.average();
      },
    });
  }

  average(): void {
    if (this.users != 0) {
      this.golesLocal = Math.round(this.golesLocal / this.users);
      this.golesAway = Math.round(this.golesAway / this.users);

      this.faltasLocal = Math.round(this.faltasLocal / this.users);
      this.faltasAway = Math.round(this.faltasAway / this.users);

      this.amarillasLocal = Math.round(this.amarillasLocal / this.users);
      this.amarillasAway = Math.round(this.amarillasAway / this.users);

      this.rojasLocal = Math.round(this.rojasLocal / this.users);
      this.rojasAway = Math.round(this.rojasAway / this.users);

      this.tirosLocal = Math.round(this.tirosLocal / this.users);
      this.tirosAway = Math.round(this.tirosAway / this.users);

      this.cornerLocal = Math.round(this.cornerLocal / this.users);
      this.cornerAway = Math.round(this.cornerAway / this.users);

      this.penaltiLocal = Math.round(this.penaltiLocal / this.users);
      this.penaltiAway = Math.round(this.penaltiAway / this.users);

      this.offsideLocal = Math.round(this.offsideLocal / this.users);
      this.offsideAway = Math.round(this.offsideAway / this.users);
    }
  }

  sumPosesion(): void {
    for (let i = 0; i < this.pLocal.length; i++) {
      this.posesionLocal = this.posesionLocal + (new Date(this.pLocal[i].end).getTime() - new Date(this.pLocal[i].start).getTime());
      console.log('Posesion ' + this.posesionLocal);
    }

    for (let i = 0; i < this.pLocal.length; i++) {
      this.posesionAway = this.posesionAway + (new Date(this.pAway[i].end).getTime() - new Date(this.pAway[i].start).getTime());
    }

    var total = this.posesionLocal + this.posesionAway;
    this.posesionLocal = Math.round((this.posesionLocal * 100) / total);
    this.posesionAway = Math.round((this.posesionAway * 100) / total);
  }
}
