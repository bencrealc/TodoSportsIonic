import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchesNewPageRoutingModule } from './matchesnew-routing.module';

import { MatchesNewPage } from 'src/app/pages/matches/new/matchesnew.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MatchesNewPageRoutingModule],
  declarations: [MatchesNewPage],
  providers: [FormBuilder],
})
export class MatchesNewPageModule {}
