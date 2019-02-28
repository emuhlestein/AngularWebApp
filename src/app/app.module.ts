import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { EarthquakeService } from './earthquake.service';
import { EarthquakesComponent } from './earthquakes/earthquakes.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    EarthquakesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [
    EarthquakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
