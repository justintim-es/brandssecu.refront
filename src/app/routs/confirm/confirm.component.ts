import { RDX_CONFIRM_FETCH } from '../../redux/confirm/actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { getConfirmIsFetch, getConfirmIsFetchSuccess, getConfirmIsRouteLogin, getConfirmIsFetchError, getConfirmFetchErrorMessage } from '../../redux/confirm/selectors';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAction } from '../../redux/combiner';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit, OnDestroy {
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: Observable<boolean>;
  fetchErrorMessage: Observable<string>;
  isRouteLoginSub: SubscriptionLike;
  activatedRouteSub: SubscriptionLike;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
    this.isFetch = this.store.select(getConfirmIsFetch);
    this.isFetchSuccess = this.store.select(getConfirmIsFetchSuccess);
    this.isFetchError = this.store.select(getConfirmIsFetchError);
    this.fetchErrorMessage = this.store.select(getConfirmFetchErrorMessage);
    this.isRouteLoginSub = this.store.select(getConfirmIsRouteLogin).subscribe(res => {
      if(res) this.router.navigate(['/login-brand']);
    });
    this.activatedRouteSub = this.activatedRoute.paramMap.subscribe(res => {
      this.store.dispatch<IAction<string>>({
        type: RDX_CONFIRM_FETCH,
        payload: res.get('token')!,
        component: 'confirm'
      });
    })
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.activatedRouteSub.unsubscribe();
  }

}
