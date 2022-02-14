import { aschax } from '../../axios-instance';
import { rdxHomeFetchIsBoarded, RDX_HOME_FETCH_IS_BOARDED_SUCCESS } from './actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { getLoginToken } from '../login/selectors';
import { Store } from '@ngrx/store';
import { RDX_UNEXPECTED_ERROR_SET } from '../unexpected-error/actions';
import { AxiosError } from 'axios';
@Injectable({
  providedIn: 'root'
})
export class HomeEffectsService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetchIsBoarded = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxHomeFetchIsBoarded),
      withLatestFrom(this.store.select(getLoginToken)),
      switchMap(ac => aschax.get('/home', {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_HOME_FETCH_IS_BOARDED_SUCCESS,
          payload: res.data,
          component: ac[0].component
        };
      }).catch((error: AxiosError) => {
        return {
          type: RDX_UNEXPECTED_ERROR_SET,
          payload: error.response?.data,
          component: ac[0].component
        };
      }))
    );
  })
}
