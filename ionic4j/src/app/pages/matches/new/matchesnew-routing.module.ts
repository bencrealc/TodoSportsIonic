import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchesNewPage } from 'src/app/pages/matches/new/matchesnew.page';
import { UserRouteAccessService } from 'src/app/services/auth/user-route-access.service';

const routes: Routes = [
  {
    path: '',
    component: MatchesNewPage,
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchesNewPageRoutingModule {}
