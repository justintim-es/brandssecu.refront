import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILoginReducer } from './reducer';

const getFeatureLoginSelector = createFeatureSelector<ILoginReducer>('loginReducer');

export const getLoginIsFetch = createSelector(
  getFeatureLoginSelector,
  state => state.isFetch
)
export const getLoginIsFetchSuccess = createSelector(
  getFeatureLoginSelector,
  state => state.isFetchSuccess
)
export const getLoginIsFetchError = createSelector(
  getFeatureLoginSelector,
  state => state.isFetchError
)
export const getLoginFetchErrorMessage = createSelector(
  getFeatureLoginSelector,
  state => state.fetchErrorMessage
)
export const getLoginToken = createSelector(
  getFeatureLoginSelector,
  state => state.token
);
