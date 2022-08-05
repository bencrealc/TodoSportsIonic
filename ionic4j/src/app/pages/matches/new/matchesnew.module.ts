import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { MatchesNewPageRoutingModule } from './matchesnew-routing.module';

import { MatchesNewPage } from 'src/app/pages/matches/new/matchesnew.page';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MatchesNewPageRoutingModule, TranslateModule],
  declarations: [MatchesNewPage],
  providers: [FormBuilder],
})
export class MatchesNewPageModule {}
