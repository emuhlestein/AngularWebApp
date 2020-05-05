import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EarthquakeSearchComponent } from '../earthquake-search/earthquake-search.component';
import { SummaryPanelComponent } from '../summary-panel/summary-panel.component';
import { TrendsPanelComponent } from '../trends-panel/trends-panel.component';
import { MainPanelComponent } from './main-panel.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { RecentQuakesComponent } from '../recent-panel/recent-panel.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'primeng/spinner';
import { EarthquakeService } from '../earthquake/earthquake.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { SessionDataService } from '../session-data-service';
import { ConfirmationService } from 'primeng/api';

describe('MainPanelComponent', () => {
  let component: MainPanelComponent;
  let fixture: ComponentFixture<MainPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainPanelComponent,
        EarthquakeSearchComponent, SummaryPanelComponent,
        TrendsPanelComponent, InputFieldComponent, RecentQuakesComponent],
      imports: [FormsModule, CardModule, CalendarModule, ConfirmDialogModule,
        SpinnerModule, HttpClientTestingModule, ChartModule, TableModule],
      providers: [EarthquakeService, DatePipe, SessionDataService, ConfirmationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
