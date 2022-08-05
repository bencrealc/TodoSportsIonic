import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchesDataPageRoutingModule } from './matchesData-routing.module';

import { MatchesDataPage } from './matchesData.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MatchesDataPageRoutingModule],
  declarations: [MatchesDataPage],
  providers: [FormBuilder],
})
export class MatchesDataPageModule {}
