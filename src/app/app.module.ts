import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { EarthquakeService } from './earthquake.service';
import { EarthquakesComponent } from './earthquakes/earthquakes.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { InputFieldComponent } from './input-field/input-field.component';
import { ParametersComponent } from './parameters/parameters.component'


@NgModule({
  declarations: [
    AppComponent,
    EarthquakesComponent,
    MessagesComponent,
    InputFieldComponent,
    ParametersComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TableModule,
    HttpClientModule
  ],
  providers: [
    EarthquakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
