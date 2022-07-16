import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  private selectedEvento: string;
  private selectedEquipo: string;
  constructor(private pickerController: PickerController) {}

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
}
