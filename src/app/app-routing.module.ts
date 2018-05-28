import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoanRouteComponent } from './home-loan-route/home-loan-route.component';
import { TotalsRouteComponent } from './totals-route/totals-route.component';

const appRoutes: Routes = [
  { path: '', component: TotalsRouteComponent },
  { path: 'home-loan', component: HomeLoanRouteComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true,
      },
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
