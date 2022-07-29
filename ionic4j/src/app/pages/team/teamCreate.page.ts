import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/services/events/events.service';
import { finalize } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { TeamService } from 'src/app/services/team/team.service';
import { Team } from 'src/app/services/team/team.model';

@Component({
  selector: 'app-teamCreate',
  templateUrl: './teamCreate.page.html',
  styleUrls: ['./teamCreate.page.scss'],
})
export class TeamCreatePage implements OnInit {
  isSaving = false;

  constructor(
    public teamService: TeamService,
    public navController: NavController,
    public eventsService: EventsService,
    public toastController: ToastController,
    public translateService: TranslateService,
    protected fb: FormBuilder
  ) {}

  ngOnInit() {}
  save(name): void {
    this.isSaving = true;
    const event = this.createFrom(name);
    this.subscribeToSaveResponse(this.eventsService.create(event));
  }

  protected subscribeToSaveResponse(result: Observable<ArrayBuffer>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected createFrom(name): Team {
    return {
      ...new Team(),
      name: name,
    };
  }

  protected onSaveSuccess(): void {}

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {}
}
