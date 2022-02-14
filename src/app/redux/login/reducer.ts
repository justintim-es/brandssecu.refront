import { createReducer, on } from '@ngrx/store';
import { rdxLoginFetch, rdxLoginFetchSuccess, rdxLoginFetchError } from './actions';

export interface ILoginReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError: boolean;
  fetchErrorMessage: string;
  token: string;
}
export const loginInitial: ILoginReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchErrorMessage: '',
  token: ''
}
export const loginReducer = createReducer(
  loginInitial,
  on(rdxLoginFetch, (state: ILoginReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false
    }
  }),
  on(rdxLoginFetchSuccess, (state: ILoginReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      token: action.payload!
    }
  }),
  on(rdxLoginFetchError, (state: ILoginReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchErrorMessage: ''
    }
  })
)
