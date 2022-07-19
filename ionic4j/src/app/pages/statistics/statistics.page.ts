import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { EventsService } from 'src/app/services/events/events.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  private selectedEvento: string;
  private selectedEquipo: string;
  private EventsService: EventsService;
  private eventErrorString: string;
  private eventSuccessString: string;
  private existingEventError: string;
  private invalidPasswordError: string;

  constructor(
    private pickerController: PickerController,
    public navController: NavController,
    public eventsService: EventsService,
    public toastController: ToastController,
    public translateService: TranslateService
  ) {
    this.translateService.get(['EVENT_ERROR', 'EVENT_SUCCESS', 'EXISTING_EVENT_ERROR', 'INVALID_PASSWORD_ERROR']).subscribe(values => {
      this.eventErrorString = values.EVENT_ERROR;
      this.eventSuccessString = values.EVENT_SUCCESS;
      this.existingEventError = values.EXISTING_EVENT_ERROR;
      this.invalidPasswordError = values.INVALID_PASSWORD_ERROR;
    });
  }

  ngOnInit() {}

  async eventosButton() {
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',

          handler: selected => {
            this.selectedEvento = selected.evento.value;
            this.selectedEquipo = selected.equipo.value;
          },
        },
      ],
      columns: [
        {
          name: 'evento',
          options: [
            { text: 'Amarilla', value: 'amarilla' },
            { text: 'Roja', value: 'roja' },
            { text: 'Gol', value: 'gol' },
            { text: 'Falta', value: 'falta' },
            { text: 'Tiro', value: 'tiro' },
            { text: 'Corner', value: 'corner' },
          ],
        },
        {
          name: 'equipo',
          options: [
            { text: 'Equipo local', value: 'local' },
            { text: 'Equipo visitante', value: 'visitante' },
          ],
        },
      ],
    });
    await picker.present();
  }

  doCreateEvent() {
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
  }
}
