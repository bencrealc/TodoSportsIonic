import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatchesPageRoutingModule } from './matches-routing.module';

import { MatchesPage } from './matches.page';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MatchesPageRoutingModule, TranslateModule, Ng2SearchPipeModule],
  declarations: [MatchesPage],
  providers: [FormBuilder],
})
export class MatchesPageModule {}
