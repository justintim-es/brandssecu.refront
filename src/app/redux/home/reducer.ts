import { createReducer, on } from '@ngrx/store';
import { rdxHomeFetchIsBoarded, rdxHomeFetchIsBoardedSuccess, rdxHomeFetchOnboardLink, rdxHomeFetchOnboardLinkSuccess } from  './actions';
export interface IHomeReducer {
  isFetch: boolean;
  isBoarded: boolean;
  onboardLink: string;
}
export const homeInitial: IHomeReducer = {
  isFetch: false,
  isBoarded: false,
  onboardLink: ''
}
export const homeReducer = createReducer(
  homeInitial,
  on(rdxHomeFetchIsBoarded, (state: IHomeReducer) => {
    return {
      ...state,
      isFetch: true
    }
  }),
  on(rdxHomeFetchIsBoardedSuccess, (state: IHomeReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isBoarded: action.payload!
    }
  }),
  on(rdxHomeFetchOnboardLink, (state: IHomeReducer) => {
    return {
      ...state,
      isFetch: true
    }
  }),
  on(rdxHomeFetchOnboardLinkSuccess, (state: IHomeReducer) => {
    return {
      ...state,
      isFetch: false,
      onboardLink: action.payload!
    }
  })
)
