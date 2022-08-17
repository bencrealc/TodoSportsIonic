import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatchDataPageRoutingModule } from './matchdata-routing.module';

import { MatchDataPage } from 'src/app/pages/matches/data/matchdata.page';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MatchDataPageRoutingModule, TranslateModule, Ng2SearchPipeModule],
  declarations: [MatchDataPage],
  providers: [FormBuilder],
  exports: [Ng2SearchPipeModule],
})
export class MatchDataPageModule {}
