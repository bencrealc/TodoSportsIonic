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
  selector: 'app-matchdata',
  templateUrl: './matchdata.page.html',
  styleUrls: ['./matchdata.page.scss'],
})
export class MatchDataPage implements OnInit {
  id;

  constructor(
    private pickerController: PickerController,
    public navController: NavController,
    public toastController: ToastController,
    public translateService: TranslateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }
}
