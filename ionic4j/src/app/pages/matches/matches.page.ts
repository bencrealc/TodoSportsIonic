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
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage implements OnInit {
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

  async cambioButton() {}
  async finButton() {}

  async inicioButton() {
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
            this.savePause(value['equipo']['value'], new Date());
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
            { text: 'Fuera de Juego', value: EventType.FUERADEJUEGO },
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

  savePause(teamValue, timeValue): void {
    this.isSaving = true;
    const event = this.createFromPosesion(teamValue, timeValue);
    this.subscribeToSaveResponse(this.posesionService.create(event));
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
      time: timeValue,
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

  /* doCreateEvent() {
    this.EventsService.createEvent(this.selectedEvento).subscribe(
      async () => {
        const toast = await this.toastController.create({
          message: this.eventSuccessString,
          duration: 3000,
          position: 'top',
        });
        toast.present();
      },
      async response => {
        // Unable to sign up
        const error = JSON.parse(response.error);
        let displayError = this.eventErrorString;
        if (response.status === 400 && error.type.includes('already-used')) {
          displayError = this.existingEventError;
        } else if (response.status === 400 && error.message === 'error.validation') {
          displayError = this.invalidPasswordError;
        }
        const toast = await this.toastController.create({
          message: displayError,
          duration: 3000,
          position: 'middle',
        });
        toast.present();
      }
    );
  }*/
}
