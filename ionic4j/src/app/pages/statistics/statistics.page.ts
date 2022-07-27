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

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  isSaving = false;
  eventTypeValues = Object.keys(EventType);

  Local: String = new Date().toLocaleString();

  constructor(
    private pickerController: PickerController,
    public navController: NavController,
    public eventsService: EventsService,
    public posesionService: PosesionService,
    public toastController: ToastController,
    public translateService: TranslateService,
    protected fb: FormBuilder
  ) {}

  ngOnInit() {}

  async localButton() {
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
    const toastFin = await this.toastController.create({
      message: 'El equipo local ha finalizado la posesión',
      duration: 2000,
      position: 'top',
      color: 'light',
    });
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: (value: any) => {
            //TODO Save
            this.actionTipoPos(false, value['tipoPos']['value']);
            if (value['tipoPos']['value'] == 1) {
              toastLocal.present();
            } else if (value['tipoPos']['value'] == 2) {
              toastFin.present();
            } else {
              toastVisit.present();
            }
            console.log(false, value['tipoPos']['value']);
          },
        },
      ],
      columns: [
        {
          name: 'tipoPos',
          options: [
            { text: 'Inicio', value: 1 },
            { text: 'Fin', value: 2 },
            { text: 'Cambio', value: 3 },
          ],
        },
      ],
    });
    await picker.present();
  }

  async visitButton() {
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
    const toastFin = await this.toastController.create({
      message: 'El equipo visitante ha finalizado la posesión',
      duration: 2000,
      position: 'top',
      color: 'light',
    });
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: (value: any) => {
            //TODO Save
            this.actionTipoPos(true, value['tipoPos']['value']);
            if (value['tipoPos']['value'] == 1) {
              toastVisit.present();
            } else if (value['tipoPos']['value'] == 2) {
              toastFin.present();
            } else {
              toastLocal.present();
            }
            console.log(true, value['tipoPos']['value']);
          },
        },
      ],
      columns: [
        {
          name: 'tipoPos',
          options: [
            { text: 'Inicio', value: 1 },
            { text: 'Fin', value: 2 },
            { text: 'Cambio', value: 3 },
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
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
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
    const event = this.createFromForm(eventTypeValue, teamValue);
    this.subscribeToSaveResponse(this.eventsService.create(event));
  }

  actionTipoPos(teamValue, tipoPosValue): void {
    this.isSaving = true;
    if (tipoPosValue == 1) {
      const posesion = this.createFromPosesion(teamValue, new Date());
      this.subscribeToSaveResponse(this.posesionService.create(posesion));
    }
    if (tipoPosValue == 2) {
      const event = this.closeFromPosesion(teamValue, new Date());
      this.subscribeToSaveResponse(this.posesionService.close(event));
    }
    if (tipoPosValue == 3) {
      const event = this.createFromPosesion(teamValue, new Date());
      this.subscribeToSaveResponse(this.posesionService.change(event));
    }
  }

  protected createFromForm(eventTypeValue, teamValue): Event {
    return {
      ...new Event(),
      eventType: eventTypeValue,
      team: teamValue,
    };
  }

  protected createFromPosesion(teamValue, timeValue): Posesion {
    return {
      ...new Posesion(),
      team: teamValue,
      start: timeValue,
    };
  }

  protected closeFromPosesion(teamValue, timeValue): Posesion {
    return {
      ...new Posesion(),
      team: teamValue,
      end: timeValue,
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
