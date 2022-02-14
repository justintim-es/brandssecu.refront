import { TestBed } from '@angular/core/testing';

import { MainEffectsService } from './main-effects.service';

describe('MainEffectsService', () => {
  let service: MainEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
