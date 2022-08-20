import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRouteAccessService } from 'src/app/services/auth/user-route-access.service';

import { TeamCreatePage } from './teamCreate.page';

const routes: Routes = [
  {
    path: '',
    component: TeamCreatePage,
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
export class TeamCreatePageRoutingModule {}
