import { TestBed } from '@angular/core/testing';

import { WelcomeEffectsService } from './welcome-effects.service';

describe('WelcomeEffectsService', () => {
  let service: WelcomeEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
