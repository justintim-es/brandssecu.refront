import { IAction, ILoginFetch } from '../../redux/combiner';
import {  RDX_LOGIN_FETCH } from  '../../redux/login/actions';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../errorstatematcher';
import {
  enterTransformFromUp,
  enterTransformFromLeft,
  enterTransformFromRight
} from '../../animations/animator';
import { Router } from '@angular/router';
import { Observable, SubscriptionLike } from 'rxjs';
import {
  getLoginIsFetch,
  getLoginIsFetchSuccess,
  getLoginIsFetchError,
  getLoginFetchErrorMessage,
} from '../../redux/login/selectors';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    enterTransformFromUp,
    enterTransformFromLeft,
    enterTransformFromRight
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string;
  emailFormControl: FormControl;
  password: string;
  passwordFormControl: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
  isFetch: Observable<boolean>;
  isFetchSuccessSub: SubscriptionLike;
  isFetchErrorSub: SubscriptionLike;
  fetchErrorMessage: Observable<string>;
  constructor(
    private router: Router,
    private store: Store
  ) {
    this.email = '';
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.password = '';
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.isFetch = this.store.select(getLoginIsFetch);
    this.isFetchSuccessSub = this.store.select(getLoginIsFetchSuccess).subscribe(res => {
      if(res) this.router.navigate(['/main']);
    });
    this.isFetchErrorSub = this.store.select(getLoginIsFetchError).subscribe(res => {
      if (res) {
        this.emailFormControl.setErrors({ backend: true });
        this.passwordFormControl.setErrors({ backend: true })
      }
    });
    this.fetchErrorMessage = this.store.select(getLoginFetchErrorMessage);
  }

  ngOnInit(): void {
  }
  login() {
    if(!this.emailFormControl.hasError('required') && !this.passwordFormControl.hasError('required')) {
      this.store.dispatch<IAction<ILoginFetch>>({
        type: RDX_LOGIN_FETCH,
        payload: {
          username: this.email,
          password: this.password,
          clientCredentials: 're.brandssecu:'
        },
        component: 'login'
      });
    }
  }
  ngOnDestroy() {
    this.isFetchSuccessSub.unsubscribe();
    this.isFetchErrorSub.unsubscribe();
  }

}
