import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { MatchesEndPageRoutingModule } from './matchesEnd-routing.module';

import { MatchesEndPage } from './matchesEnd.page';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MatchesEndPageRoutingModule, TranslateModule],
  declarations: [MatchesEndPage],
  providers: [FormBuilder],
})
export class MatchesEndPageModule {}
