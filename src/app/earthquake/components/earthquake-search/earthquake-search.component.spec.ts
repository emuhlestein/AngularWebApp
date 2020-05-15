import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EarthquakeSearchComponent } from './earthquake-search.component';
import { FormsModule } from '@angular/forms';
import { EarthquakeService } from '../../earthquake.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { SessionDataService } from '../../../session-data-service';

describe('EarthquakeSearchComponent', () => {
  let component: EarthquakeSearchComponent;
  let fixture: ComponentFixture<EarthquakeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EarthquakeSearchComponent],
      imports: [
        FormsModule, HttpClientTestingModule],
      providers: [EarthquakeService, DatePipe, SessionDataService]
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
