import { TestBed } from '@angular/core/testing';

import { HomeEffectsService } from './home-effects.service';

describe('HomeEffectsService', () => {
  let service: HomeEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
