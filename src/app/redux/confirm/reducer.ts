import { createReducer, on } from '@ngrx/store';
import { rdxConfirmFetch, rdxConfirmFetchSuccess, rdxConfirmFetchError, rdxConfirmIsRouteLoginTrue } from './actions';
export interface IConfirmReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError: boolean;
  fetchErrorMessage: string;
  isRouteLogin: boolean;
}
export const confirmInitial: IConfirmReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchErrorMessage: '',
  isRouteLogin: false
}
export const confirmReducer = createReducer(
  confirmInitial,
  on(rdxConfirmFetch, (state: IConfirmReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false,
      fetchErrorMessage: ''
    }
  }),
  on(rdxConfirmFetchSuccess, (state: IConfirmReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
    };
  }),
  on(rdxConfirmFetchError, (state: IConfirmReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchErrorMessage: action.payload!
    }
  }),
  on(rdxConfirmIsRouteLoginTrue, (state: IConfirmReducer) => {
    return {
      ...state,
      isRouteLogin: true
    }
  })
)
