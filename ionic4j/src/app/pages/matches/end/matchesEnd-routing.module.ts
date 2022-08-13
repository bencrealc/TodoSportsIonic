import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchesEndPage } from './matchesEnd.page';

const routes: Routes = [
  {
    path: '',
    component: MatchesEndPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchesEndPageRoutingModule {}
