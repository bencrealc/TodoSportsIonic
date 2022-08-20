import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchDataPage } from 'src/app/pages/matches/data/matchdata.page';
import { UserRouteAccessService } from 'src/app/services/auth/user-route-access.service';

const routes: Routes = [
  {
    path: '',
    component: MatchDataPage,
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
export class MatchDataPageRoutingModule {}
