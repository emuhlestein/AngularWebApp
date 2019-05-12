import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { EarthquakesComponent } from './earthquakes/earthquakes.component';
import { MessagesComponent } from './messages/messages.component';
import { ParametersComponent } from './parameters/parameters.component'
import { SummaryPanelComponent } from './summary-panel/summary-panel.component';
import { TrendsPanelComponent } from './trends-panel/trends-panel.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InputFieldComponent } from './input-field/input-field.component';
import { SpinnerModule } from 'primeng/spinner';
import { SessionDataService } from './session-data-service';
import { DatePipe } from '@angular/common';
import { EarthquakeService } from './earthquake.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CalendarComponent,
        MainPanelComponent,
        EarthquakesComponent,
        MessagesComponent,
        ParametersComponent,
        SummaryPanelComponent,
        TrendsPanelComponent,
        InputFieldComponent
      ],
      imports: [
        CalendarModule,
        CardModule,
        ConfirmDialogModule,
        FormsModule,
        SpinnerModule,
        TableModule,
        HttpClientTestingModule
      ],
      providers: [
        ConfirmationService,
        DatePipe,
        EarthquakeService,
        SessionDataService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'EdsWebSite'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Ed\'s Web Site');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Ed\'s Web Site!');
  });
});
