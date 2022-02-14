import { Injectable } from '@angular/core';
import { switchMap, map, delay } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { aschax } from '../../axios-instance';
import { AxiosError } from 'axios';
import { rdxRegisterBrandFetch,

  RDX_REGISTER_BRAND_FETCH_SUCCESS,
  RDX_REGISTER_BRAND_IS_BRAND_FETCH_ERROR,
  RDX_REGISTER_BRAND_IS_PASSWORD_FETCH_ERROR,
  RDX_REGISTER_BRAND_IS_ANIMATION_DONE_TRUE,
  RDX_REGISTER_BRAND_IS_EMAIL_FETCH_ERROR,
  rdxRegisterBrandFetchSuccess
} from './actions';
import {
  RDX_LOGIN_FETCH
} from '../login/actions';
@Injectable({
  providedIn: 'root'
})
export class RegisterBrandEffectsService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRegisterBrandFetch),
      switchMap(ac => aschax.post('/register-brand', ac.payload).then(res => {
        return {
          type: RDX_REGISTER_BRAND_FETCH_SUCCESS,
          payload: ac.payload,
          component: ac.component
        };
      }).catch((err: AxiosError) => {
        console.log(err.response?.data?.error);
        if(err.response?.data.error.includes('e-mail')) {
          return {
            type: RDX_REGISTER_BRAND_IS_EMAIL_FETCH_ERROR,
            payload: err.response?.data.error,
            component: ac.component
          };
        } else if (err.response?.data.error.includes('brand')) {
          return {
            type: RDX_REGISTER_BRAND_IS_BRAND_FETCH_ERROR,
            payload: err.response?.data.error,
            component: ac.component
          };
        }
        return {
          type: RDX_REGISTER_BRAND_IS_PASSWORD_FETCH_ERROR,
          payload: err.response?.data.error,
          component: ac.component
        };
      }))
    )
  });
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRegisterBrandFetchSuccess),
      map(ac => {
        return {
          type: RDX_LOGIN_FETCH,
          payload: {
            username: ac.payload?.email,
            password: ac.payload?.password,
            clientCredentials: 're.brandssecu:'
          }
        }
      })
    )
  })
  fetchSuccessOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRegisterBrandFetchSuccess),
      delay(500),
      map(ac => {
        return {
          type: RDX_REGISTER_BRAND_IS_ANIMATION_DONE_TRUE,
          component: ac.component

        }
      })
    )
  })
}
