import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchDataPage } from 'src/app/pages/matches/data/matchdata.page';

const routes: Routes = [
  {
    path: '',
    component: MatchDataPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchDataPageRoutingModule {}
