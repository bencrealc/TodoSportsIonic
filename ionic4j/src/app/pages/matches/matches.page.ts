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
import { Match } from 'src/app/services/match/match.model';
import { MatchService } from 'src/app/services/match/match.service';

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
    public matchService: MatchService,
    public toastController: ToastController,
    public translateService: TranslateService,
    protected fb: FormBuilder
  ) {}

  ngOnInit() {}

  partidos() {
    console.log(this.matchService.query());
  }
}
