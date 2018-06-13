import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeRouteComponent } from './home-route/home-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
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
