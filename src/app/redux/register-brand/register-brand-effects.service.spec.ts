import { TestBed } from '@angular/core/testing';

import { RegisterBrandEffectsService } from './register-brand-effects.service';

describe('RegisterBrandEffectsService', () => {
  let service: RegisterBrandEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterBrandEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
