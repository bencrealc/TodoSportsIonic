import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchesDataPage } from './matchesData.page';

const routes: Routes = [
  {
    path: '',
    component: MatchesDataPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchesDataPageRoutingModule {}
