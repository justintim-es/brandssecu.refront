import { createReducer, on } from '@ngrx/store';
import { rdxRegisterBrandFetch, rdxRegisterBrandIsBrandFetchError, rdxRegisterBrandIsEmailFetchError, rdxRegisterBrandIsPasswordFetchError, rdxRegisterBrandFetchSuccess, rdxRegisterBrandIsAnimationDoneTrue } from './actions';
export interface IRegisterBrandReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchBrandError: boolean;
  isFetchEmailError: boolean;
  isFetchPasswordError: boolean;
  fetchErrorMessage: string;
  isAnimationDone: boolean;
}
export const registerBrandInitial: IRegisterBrandReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchBrandError: false,
  isFetchEmailError: false,
  isFetchPasswordError: false,
  fetchErrorMessage: '',
  isAnimationDone: false,
}
export const registerBrandReducer = createReducer(
  registerBrandInitial,
  on(rdxRegisterBrandFetch, (state: IRegisterBrandReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false,
      fetchErrorMessage: '',
      isAnimationDone: false
    };
  }),
  on(rdxRegisterBrandFetchSuccess, (state: IRegisterBrandReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true
    };
  }),
  on(rdxRegisterBrandIsBrandFetchError, (state: IRegisterBrandReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchBrandError: true,
      fetchErrorMessage: action.payload!
    };
  }),
  on(rdxRegisterBrandIsEmailFetchError, (state: IRegisterBrandReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchEmailError: true,
      fetchErrorMessage: action.payload!
    };
  }),
  on(rdxRegisterBrandIsPasswordFetchError, (state: IRegisterBrandReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchPasswordError: true,
      fetchErrorMessage: action.payload!
    };
  }),
  on(rdxRegisterBrandIsAnimationDoneTrue, (state: IRegisterBrandReducer) => {
    return {
      ...state,
      isAnimationDone: true
    }
  })
)
