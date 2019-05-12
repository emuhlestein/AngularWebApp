import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { EarthquakesComponent } from './earthquakes.component';
import { EarthquakeService } from '../earthquake.service';
import { CardModule } from 'primeng/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';

describe('EarthquakesComponent', () => {
  let component: EarthquakesComponent;
  let fixture: ComponentFixture<EarthquakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakesComponent ],
      imports: [ CardModule, TableModule, HttpClientTestingModule ],
      providers: [ EarthquakeService, DatePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
