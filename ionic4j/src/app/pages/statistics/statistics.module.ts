import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticsPageRoutingModule } from './statistics-routing.module';

import { StatisticsPage } from './statistics.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, StatisticsPageRoutingModule],
  declarations: [StatisticsPage],
  providers: [FormBuilder],
})
export class StatisticsPageModule {}
