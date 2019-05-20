import { TestBed } from '@angular/core/testing';

import { MagnitudeSelectedService } from './magnitude-selected.service';

describe('MagnitudeSelectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagnitudeSelectedService = TestBed.get(MagnitudeSelectedService);
    expect(service).toBeTruthy();
  });
});
