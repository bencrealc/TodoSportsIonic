import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/services/events/events.service';
import { finalize, map } from 'rxjs/operators';
import { Event } from 'src/app/services/events/event.model';
import { EventType } from 'src/app/services/events/enumerations/event-type.model';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Posesion } from 'src/app/services/posesion/posesion.model';
import { PosesionService } from 'src/app/services/posesion/posesion.service';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  isSaving = false;
  eventTypeValues = Object.keys(EventType);
  id;

  constructor(
    private pickerController: PickerController,
    public navController: NavController,
    public eventsService: EventsService,
    public posesionService: PosesionService,
    public toastController: ToastController,
    public translateService: TranslateService,
    protected fb: FormBuilder,
    private screenOrientation: ScreenOrientation,
    private route: ActivatedRoute
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  async inicioButton() {
    const toastLocal = await this.toastController.create({
      message: 'El equipo local ha obtenido la posesión',
      duration: 2000,
      position: 'top',
      color: 'light',
    });
    const toastVisit = await this.toastController.create({
      message: 'El equipo visitante ha obtenido la posesión',
      duration: 2000,
      position: 'top',
      color: 'light',
    });
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value: any) => {
            //TODO Save
            this.saveInicio(value['equipo']['value']);
            if (value['equipo']['value'] == false) {
              toastLocal.present();
            } else {
              toastVisit.present();
            }

            console.log(value['equipo']['value'], new Date());
          },
        },
      ],
      columns: [
        {
          name: 'equipo',
          options: [
            { text: 'Local', value: false },
            { text: 'Visitante', value: true },
          ],
        },
      ],
    });
    await picker.present();
  }

  async eventosButton() {
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value: any) => {
            //TODO Save
            this.save(value['evento']['value'], value['equipo']['value']);
            console.log(value['equipo']['value']);
            console.log(value['evento']['value']);
          },
        },
      ],
      columns: [
        {
          name: 'evento',
          options: [
            { text: 'Amarilla', value: EventType.AMARILLA },
            { text: 'Roja', value: EventType.ROJA },
            { text: 'Gol', value: EventType.GOL },
            { text: 'Falta', value: EventType.FALTA },
            { text: 'Tiro', value: EventType.TIRO },
            { text: 'Corner', value: EventType.CORNER },
            { text: 'Fuera de Juego', value: EventType.FUERA_DE_JUEGO },
          ],
        },
        {
          name: 'equipo',
          options: [
            { text: 'Equipo local', value: false },
            { text: 'Equipo visitante', value: true },
          ],
        },
      ],
    });
    await picker.present();
  }

  save(eventTypeValue, teamValue): void {
    this.isSaving = true;
    const event = this.createFromForm(eventTypeValue, teamValue, this.id);
    this.subscribeToSaveResponse(this.eventsService.create(event));
  }

  saveInicio(teamValue): void {
    this.isSaving = true;
    const posesion = this.createFromPosesion(teamValue, new Date(), this.id);
    this.subscribeToSaveResponse(this.posesionService.create(posesion));
  }

  saveFinal(): void {
    this.isSaving = true;
    //const teamValue = this.posesionService.query();
    const event = this.closeFromPosesion(null, new Date(), this.id);
    this.subscribeToSaveResponse(this.posesionService.close(event));
  }

  saveChange(): void {
    this.isSaving = true;
    //const teamValue = this.posesionService.query();
    const event = this.createFromPosesion(null, new Date(), this.id);
    this.subscribeToSaveResponse(this.posesionService.change(event));
  }

  protected createFromForm(eventTypeValue, teamValue, id): Event {
    return {
      ...new Event(),
      eventType: eventTypeValue,
      team: teamValue,
      matchId: id,
    };
  }

  protected createFromPosesion(teamValue, timeValue, id): Posesion {
    return {
      ...new Posesion(),
      team: teamValue,
      start: timeValue,
      matchId: id,
    };
  }

  protected closeFromPosesion(teamValue, timeValue, id): Posesion {
    return {
      ...new Posesion(),
      team: teamValue,
      end: timeValue,
      matchId: id,
    };
  }

  protected subscribeToSaveResponse(result: Observable<ArrayBuffer>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {}

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {}
}
