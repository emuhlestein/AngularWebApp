import { TestBed } from '@angular/core/testing';

import { ProgressBarService } from './progressbar.service';

describe('ProgressbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgressBarService = TestBed.get(ProgressBarService);
    expect(service).toBeTruthy();
  });
});
