import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EarthquakeService } from './earthquake.service';
import { DatePipe } from '@angular/common';

describe('EarthquakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [EarthquakeService, DatePipe]
  }));

  it('should be created', () => {
    const service: EarthquakeService = TestBed.get(EarthquakeService);
    expect(service).toBeTruthy();
  });
});
