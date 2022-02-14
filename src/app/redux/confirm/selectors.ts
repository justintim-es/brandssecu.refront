import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IConfirmReducer } from './reducer';

const getFeatureStateConfirmSelector = createFeatureSelector<IConfirmReducer>('confirmReducer');

export const getConfirmIsFetch = createSelector(
  getFeatureStateConfirmSelector,
  state => state.isFetch
);
export const getConfirmIsFetchSuccess = createSelector(
  getFeatureStateConfirmSelector,
  state => state.isFetchSuccess
);
export const getConfirmIsFetchError = createSelector(
  getFeatureStateConfirmSelector,
  state => state.isFetchError
);
export const getConfirmFetchErrorMessage = createSelector(
  getFeatureStateConfirmSelector,
  state => state.fetchErrorMessage
)
export const getConfirmIsRouteLogin = createSelector(
  getFeatureStateConfirmSelector,
  state => state.isRouteLogin
)
