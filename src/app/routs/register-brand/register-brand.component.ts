import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../errorstatematcher';
import { Store } from '@ngrx/store';
import { RDX_REGISTER_BRAND_FETCH } from '../../redux/register-brand/actions';
import { IAction, IRegisterBrandFetch } from '../../redux/combiner';
import { Observable, SubscriptionLike } from 'rxjs';
import { Router } from '@angular/router';
import { enterTransformFromLeft, enterTransformFromRight, enterTransformFromUp, leaveTransformToLeft, leaveTransformToRight, leaveTransformToUp } from '../../animations/animator';
import {
  getRegisterBrandIsFetch,
  getRegisterBrandIsFetchBrandError,
  getRegisterBrandIsFetchEmailError,
 getRegisterBrandIsFetchPasswordError,
 getRegisterBrandIsFetchSuccess,
 getRegisterBrandIsAnimationDone,
 getRegisterBrandFetchErrorMessage } from '../../redux/register-brand/selectors';
import {
  getLoginIsFetchSuccess
} from '../../redux/login/selectors';
@Component({
  selector: 'app-register-brand',
  templateUrl: './register-brand.component.html',
  styleUrls: ['./register-brand.component.css'],
  animations: [
    enterTransformFromLeft,
    enterTransformFromRight,
    enterTransformFromUp,
    leaveTransformToLeft,
    leaveTransformToRight,
    leaveTransformToUp
  ]
})
export class RegisterBrandComponent implements OnInit, OnDestroy {
  brandNameFormControl: FormControl;
  brandName: string;
  emailFormControl: FormControl;
  email: string;
  passwordFormControl: FormControl;
  password: string;
  errorStateMatcher: MyErrorStateMatcher
  isFetch: Observable<boolean>;
  isRegisterFetchSuccess: Observable<boolean>;
  isLoginFetchSuccessSub: SubscriptionLike;
  isFetchEmailErrorSub: SubscriptionLike;
  isFetchBrandErrorSub: SubscriptionLike
  isFetchPasswordErrorSub: SubscriptionLike;
  fetchErrorMessage: Observable<string>;
  isAnimationDone: Observable<boolean>;
  constructor(
    private store: Store,
    private router: Router,
  ) {
    this.brandNameFormControl = new FormControl('', [
      Validators.required
    ]);
    this.brandName = '';
    this.emailFormControl = new FormControl('', [
      Validators.email,
      Validators.required
    ]);
    this.email = '';
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.password = '';
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.isFetch = this.store.select(getRegisterBrandIsFetch);
    this.isRegisterFetchSuccess = this.store.select(getRegisterBrandIsFetchSuccess);
    this.isLoginFetchSuccessSub = this.store.select(getLoginIsFetchSuccess).subscribe(res => {
      if(res) this.router.navigate(['/main']);
    })
    this.isFetchBrandErrorSub = this.store.select(getRegisterBrandIsFetchBrandError).subscribe(res => {
      if(res) this.brandNameFormControl.setErrors({ backend: true });
    })
    this.isFetchEmailErrorSub = this.store.select(getRegisterBrandIsFetchEmailError).subscribe(res => {
      if(res) this.emailFormControl.setErrors({ backend: true});
    })
    this.isFetchPasswordErrorSub = this.store.select(getRegisterBrandIsFetchPasswordError).subscribe(res => {
      if(res) this.passwordFormControl.setErrors({ backend: true });
    });
    this.fetchErrorMessage = this.store.select(getRegisterBrandFetchErrorMessage);
    this.isAnimationDone = this.store.select(getRegisterBrandIsAnimationDone);
 }

  ngOnInit(): void {
  }
  register() {
    if(!this.brandNameFormControl.hasError('required') && !this.emailFormControl.hasError('required') && !this.emailFormControl.hasError('email') && !this.passwordFormControl.hasError('required')) {
      this.store.dispatch<IAction<IRegisterBrandFetch>>({
        type: RDX_REGISTER_BRAND_FETCH,
        payload: {
            brandName: this.brandName,
            email: this.email,
            password: this.password
        },
        component: 'register-brand'
      });
    }
  }
  ngOnDestroy() {
    this.isLoginFetchSuccessSub.unsubscribe();
    this.isFetchBrandErrorSub.unsubscribe();
    this.isFetchEmailErrorSub.unsubscribe();
    this.isFetchPasswordErrorSub.unsubscribe();
  }
}
