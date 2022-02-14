import { TestBed } from '@angular/core/testing';

import { ConfirmEffectsService } from './confirm-effects.service';

describe('ConfirmEffectsService', () => {
  let service: ConfirmEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
