import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { MatchDataPageRoutingModule } from './matchdata-routing.module';

import { MatchDataPage } from 'src/app/pages/matches/data/matchdata.page';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MatchDataPageRoutingModule, TranslateModule],
  declarations: [MatchDataPage],
  providers: [FormBuilder],
})
export class MatchDataPageModule {}
