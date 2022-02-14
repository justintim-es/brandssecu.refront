import { aschax } from '../../axios-instance';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { rdxMainFetchIsConfirmed, RDX_MAIN_FETCH_IS_CONFIRMED_SUCCESS, rdxMainFetchIsConfirmedSuccess, RDX_MAIN_IS_ROUTE_HOME_TRUE } from './actions';
import { RDX_UNEXPECTED_ERROR_SET } from '../unexpected-error/actions';
import { getLoginToken } from '../login/selectors';
@Injectable({
  providedIn: 'root'
})
export class MainEffectsService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }
  fetchIsConfirmed = createEffect(() => {
      return this.actions.pipe(
        ofType(rdxMainFetchIsConfirmed),
        withLatestFrom(this.store.select(getLoginToken)),
        switchMap(ac => aschax.get('/main', {
          headers: {
            'Authorization': 'Bearer ' + ac[1]
          }
        }).then(res => {
          return {
            type: RDX_MAIN_FETCH_IS_CONFIRMED_SUCCESS,
            payload: res.data
          };
        }).catch((err: AxiosError) => {
          return {
            type: RDX_UNEXPECTED_ERROR_SET,
            payload: err.response?.data,
            component: ac[0].component
          }
        }))
      )
  })
  fetchIsConfirmedSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainFetchIsConfirmedSuccess),
      map(ac => {
        return {
          type: RDX_MAIN_IS_ROUTE_HOME_TRUE
        }
      })
    )
  })
}
