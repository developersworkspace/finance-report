import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRouteComponent } from './home-route/home-route.component';

const appRoutes: Routes = [
  { path: '', component: HomeRouteComponent },
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
