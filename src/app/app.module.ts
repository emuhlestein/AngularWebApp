import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { EarthquakeService } from './earthquake.service';
import { EarthquakesComponent } from './earthquakes/earthquakes.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { InputFieldComponent } from './input-field/input-field.component';
import { ParametersComponent } from './parameters/parameters.component'
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { SessionDataService } from './session-data-service';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { SpinnerModule } from 'primeng/spinner';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    EarthquakesComponent,
    MessagesComponent,
    InputFieldComponent,
    ParametersComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    ConfirmDialogModule,
    SpinnerModule
  ],
  providers: [
    EarthquakeService,
    DatePipe,
    SessionDataService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
