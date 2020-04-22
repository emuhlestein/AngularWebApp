import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './core/app.component';
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
import { SummaryPanelComponent } from './summary-panel/summary-panel.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { TrendsPanelComponent } from './trends-panel/trends-panel.component';
import { ChartModule } from 'primeng/chart';
import { MagnitudeSelectedService } from './magnitude-selected.service';
import { RecentQuakesComponent } from './recent-panel/recent-panel.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressBarComponent } from './progressbar/progressbar.component';
import { ProgressBarService } from './progressbar/progressbar.service';
import { MaterialModule } from './material-module';


@NgModule({
  declarations: [
    AppComponent,
    EarthquakesComponent,
    MessagesComponent,
    InputFieldComponent,
    ParametersComponent,
    CalendarComponent,
    SummaryPanelComponent,
    MainPanelComponent,
    TrendsPanelComponent,
    RecentQuakesComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    CardModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    HttpClientModule,
    ConfirmDialogModule,
    SpinnerModule,
    ChartModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    MaterialModule
  ],
  providers: [
    EarthquakeService,
    DatePipe,
    SessionDataService,
    ConfirmationService,
    MagnitudeSelectedService,
    ProgressBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
