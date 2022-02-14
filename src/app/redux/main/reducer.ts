import { createReducer, on } from '@ngrx/store';
import { rdxMainFetchIsConfirmed, rdxMainFetchIsConfirmedSuccess, rdxMainIsRouteHomeTrue } from './actions';
export interface IMainReducer {
  isFetch: boolean;
  isConfirmed: boolean;
  isRouteHome: boolean;
}
export const mainInitial: IMainReducer = {
  isFetch: false,
  isConfirmed: false,
  isRouteHome: false,
}
export const mainReducer = createReducer(
  mainInitial,
  on(rdxMainFetchIsConfirmed, (state: IMainReducer) => {
    return {
      ...state,
      isFetch: true
    }
  }),
  on(rdxMainFetchIsConfirmedSuccess, (state: IMainReducer, action) => {
    return {
      ...state,
      isFetch: false,
    isConfirmed: action.payload!
    }
  }),
  on(rdxMainIsRouteHomeTrue, (state: IMainReducer) => {
    return {
      ...state,
      isRouteHome: true
    }
  })
)
