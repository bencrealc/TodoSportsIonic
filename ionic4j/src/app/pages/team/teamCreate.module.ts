import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamCreatePageRoutingModule } from './teams-routing.module';

import { TeamCreatePage } from './teamCreate.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TeamCreatePageRoutingModule],
  declarations: [TeamCreatePage],
  providers: [FormBuilder],
})
export class TeamCreatePageModule {}
