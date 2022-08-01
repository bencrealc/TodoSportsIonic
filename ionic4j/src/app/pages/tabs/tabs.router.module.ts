import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
          },
        ],
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule),
          },
        ],
      },
      {
        path: 'stats',
        children: [
          {
            path: '',
            loadChildren: () => import('../statistics/statistics.module').then(m => m.StatisticsPageModule),
          },
        ],
      },
      {
        path: 'matches',
        children: [
          {
            path: '',
            loadChildren: () => import('../matches/matches.module').then(m => m.MatchesPageModule),
          },
        ],
      },
      {
        path: 'teamCreate',
        children: [
          {
            path: '',
            loadChildren: () => import('../team/teamCreate.module').then(m => m.TeamCreatePageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
