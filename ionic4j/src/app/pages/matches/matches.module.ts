import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { MatchesPageRoutingModule } from './matches-routing.module';

import { MatchesPage } from './matches.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MatchesPageRoutingModule, TranslateModule],
  declarations: [MatchesPage],
  providers: [FormBuilder],
})
export class MatchesPageModule {}
