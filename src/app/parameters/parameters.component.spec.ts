import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModule } from 'primeng/card';
import { ParametersComponent } from './parameters.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { SpinnerModule } from 'primeng/spinner';
import { EarthquakeService } from '../earthquakes/earthquake.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { SessionDataService } from '../session-data-service';

describe('ParametersComponent', () => {
  let component: ParametersComponent;
  let fixture: ComponentFixture<ParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParametersComponent, CalendarComponent, InputFieldComponent],
      imports: [CardModule, ButtonModule, ConfirmDialogModule,
        FormsModule, CalendarModule, SpinnerModule, HttpClientTestingModule],
      providers: [ConfirmationService, EarthquakeService, DatePipe, SessionDataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
