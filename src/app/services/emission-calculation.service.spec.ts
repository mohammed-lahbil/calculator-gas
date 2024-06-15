import { TestBed } from '@angular/core/testing';

import { EmissionCalculationService } from './emission-calculation.service';

describe('EmissionCalculationService', () => {
  let service: EmissionCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmissionCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
