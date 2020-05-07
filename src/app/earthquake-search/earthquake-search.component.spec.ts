import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModule } from 'primeng/card';
import { EarthquakeSearchComponent } from './earthquake-search.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { SpinnerModule } from 'primeng/spinner';
import { EarthquakeService } from '../earthquake/earthquake.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { SessionDataService } from '../session-data-service';

describe('EarthquakeSearchComponent', () => {
  let component: EarthquakeSearchComponent;
  let fixture: ComponentFixture<EarthquakeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EarthquakeSearchComponent, InputFieldComponent],
      imports: [CardModule, ButtonModule, ConfirmDialogModule,
        FormsModule, CalendarModule, SpinnerModule, HttpClientTestingModule],
      providers: [ConfirmationService, EarthquakeService, DatePipe, SessionDataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
