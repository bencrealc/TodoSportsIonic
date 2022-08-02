import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchesNewPage } from 'src/app/pages/matches/new/matchesnew.page';

const routes: Routes = [
  {
    path: '',
    component: MatchesNewPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchesNewPageRoutingModule {}
