import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { PosesionComponent } from '../list/posesion.component';
import { PosesionDetailComponent } from '../detail/posesion-detail.component';
import { PosesionUpdateComponent } from '../update/posesion-update.component';
import { PosesionRoutingResolveService } from './posesion-routing-resolve.service';

const posesionRoute: Routes = [
  {
    path: '',
    component: PosesionComponent,
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PosesionDetailComponent,
    resolve: {
      posesion: PosesionRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: PosesionUpdateComponent,
    resolve: {
      posesion: PosesionRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: PosesionUpdateComponent,
    resolve: {
      posesion: PosesionRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(posesionRoute)],
  exports: [RouterModule],
})
export class PosesionRoutingModule {}
