import { createAction, props } from '@ngrx/store';
import { IActionCreator } from '../combiner';

export const RDX_MAIN_FETCH_IS_CONFIRMED = 'RDX_MAIN_FETCH_IS_CONFIRMED';
export const rdxMainFetchIsConfirmed = createAction(RDX_MAIN_FETCH_IS_CONFIRMED, props<IActionCreator<any>>());
export const RDX_MAIN_FETCH_IS_CONFIRMED_SUCCESS = 'RDX_MAIN_FETCH_IS_CONFIRMED_SUCCESS';
export const rdxMainFetchIsConfirmedSuccess = createAction(RDX_MAIN_FETCH_IS_CONFIRMED_SUCCESS, props<IActionCreator<boolean>>());
export const RDX_MAIN_IS_ROUTE_HOME_TRUE = 'RDX_MAIN_IS_ROUTE_HOME_TRUE';
export const rdxMainIsRouteHomeTrue = createAction(RDX_MAIN_IS_ROUTE_HOME_TRUE, props<IActionCreator<any>>());
