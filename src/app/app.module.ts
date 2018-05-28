import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { HomeLoanRouteComponent } from './home-loan-route/home-loan-route.component';
import { AppRoutingModule } from './app-routing.module';
import { TotalsRouteComponent } from './totals-route/totals-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLoanRouteComponent,
    TotalsRouteComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
