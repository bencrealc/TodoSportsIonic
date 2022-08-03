import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'match',
        data: { pageTitle: 'todoSportsIonicApp.match.home.title' },
        loadChildren: () => import('./match/match.module').then(m => m.MatchModule),
      },
      {
        path: 'event',
        data: { pageTitle: 'todoSportsIonicApp.event.home.title' },
        loadChildren: () => import('./event/event.module').then(m => m.EventModule),
      },
      {
        path: 'posesion',
        data: { pageTitle: 'todoSportsIonicApp.posesion.home.title' },
        loadChildren: () => import('./posesion/posesion.module').then(m => m.PosesionModule),
      },
      {
        path: 'team',
        data: { pageTitle: 'todoSportsIonicApp.team.home.title' },
        loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
