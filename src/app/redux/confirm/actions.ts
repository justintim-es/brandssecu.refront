import { createAction, props } from '@ngrx/store';
import { IActionCreator } from '../combiner';
export const RDX_CONFIRM_FETCH  = 'RDX_CONFIRM_FETCH';
export const rdxConfirmFetch = createAction(RDX_CONFIRM_FETCH, props<IActionCreator<string>>());
export const RDX_CONFIRM_FETCH_SUCCESS = 'RDX_CONFIRM_FETCH_SUCCESS';
export const rdxConfirmFetchSuccess = createAction(RDX_CONFIRM_FETCH_SUCCESS, props<IActionCreator<any>>());
export const RDX_CONFIRM_FETCH_ERROR = 'RDX_CONFIRM_FETCH_ERROR';
export const rdxConfirmFetchError = createAction(RDX_CONFIRM_FETCH_ERROR, props<IActionCreator<string>>());
export const RDX_CONFIRM_IS_ROUTE_LOGIN_TRUE  = 'RDX_CONFIRM_IS_ROUTE_LOGIN_TRUE';
export const rdxConfirmIsRouteLoginTrue = createAction(RDX_CONFIRM_IS_ROUTE_LOGIN_TRUE, props<IActionCreator<any>>())
