import { TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { SessionDataService } from './session-data-service';

describe('SessionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SessionDataService, DatePipe],
  }));

  it('should be created', () => {
    const service: SessionDataService = TestBed.get(SessionDataService);
    expect(service).toBeTruthy();
  });
});
