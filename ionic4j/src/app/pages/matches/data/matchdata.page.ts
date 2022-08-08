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
  golesLocal: number = 0;
  golesAway: number = 0;

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
    this.loadPosesion();
    this.loadEvents();
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
      },
    });
  }

  loadEvents(): void {
    this.eventService.getEvents('local', this.id).subscribe({
      next: (res: HttpResponse<Event[]>) => {
        this.eLocal = res.body ?? [];
        console.log(this.eLocal);
        this.golesLocal = this.eLocal.filter(e => e.eventType === 'GOL').length;
      },
    });

    this.eventService.getEvents('away', this.id).subscribe({
      next: (res: HttpResponse<Event[]>) => {
        this.eAway = res.body ?? [];
        console.log(this.eAway);
        this.golesAway = this.eLocal.filter(e => e.eventType === 'GOL').length;
      },
    });
  }
}
