import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSnackBarComponent } from './main-snack-bar.component';

describe('MainSnackBarComponent', () => {
  let component: MainSnackBarComponent;
  let fixture: ComponentFixture<MainSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
