import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { aschax } from '../../axios-instance';
import { rdxConfirmFetch, RDX_CONFIRM_FETCH_SUCCESS, RDX_CONFIRM_IS_ROUTE_LOGIN_TRUE, RDX_CONFIRM_FETCH_ERROR, rdxConfirmFetchSuccess } from './actions';
import { AxiosError } from 'axios';
import { delay, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConfirmEffectsService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxConfirmFetch),
      switchMap(ac => aschax.post('/register-brand/' + ac.payload).then(res => {
        return {
          type: RDX_CONFIRM_FETCH_SUCCESS,
          component: ac.component
        };
      }).catch((err: AxiosError) => {
        return {
          type: RDX_CONFIRM_FETCH_ERROR,
          component: ac.component
        }
      })
    ));
  });
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxConfirmFetchSuccess),
      delay(1000),
      map(ac => {
        return {
          type: RDX_CONFIRM_IS_ROUTE_LOGIN_TRUE,
          component: ac.component
        }
      })
    )
  })
}
