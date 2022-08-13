import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule) },
  { path: 'tabs', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule) },
  { path: 'accessdenied', redirectTo: '', pathMatch: 'full' },
  {
    path: 'statistics',
    loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsPageModule),
  },
  {
    path: 'matches',
    loadChildren: () => import('./pages/matches/matches.module').then(m => m.MatchesPageModule),
  },
  {
    path: 'matches/end',
    loadChildren: () => import('./pages/matches/end/matchesEnd.module').then(m => m.MatchesEndPageModule),
  },
  {
    path: 'matches/new',
    loadChildren: () => import('./pages/matches/new/matchesnew.module').then(m => m.MatchesNewPageModule),
  },
  {
    path: 'stats/new/:id',
    loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsPageModule),
  },
  {
    path: 'match/end/:id',
    loadChildren: () => import('./pages/matches/data/matchdata.module').then(m => m.MatchDataPageModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
