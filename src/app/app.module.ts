import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './core/app.component';
import { EarthquakeService } from './earthquakes/earthquake.service';
import { EarthquakeComponent } from './earthquakes/earthquakes.component';
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
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    EarthquakeComponent,
    MessagesComponent,
    InputFieldComponent,
    ParametersComponent,
    CalendarComponent,
    SummaryPanelComponent,
    MainPanelComponent,
    TrendsPanelComponent,
    RecentQuakesComponent,
    ProgressBarComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    CardModule,
    DialogModule,
    CommonModule,
    ConfirmDialogModule,
    FormsModule,
    HttpClientModule,
    ConfirmDialogModule,
    SpinnerModule,
    ChartModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule
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
