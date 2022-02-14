import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRegisterBrandReducer } from './reducer';
const getFeatureRegisterBrandSelector = createFeatureSelector<IRegisterBrandReducer>('registerBrandReducer');

export const getRegisterBrandIsFetch = createSelector(
  getFeatureRegisterBrandSelector,
  state => state.isFetch
)
export const getRegisterBrandIsFetchSuccess = createSelector(
  getFeatureRegisterBrandSelector,
  state => state.isFetchSuccess
);
export const getRegisterBrandIsFetchEmailError = createSelector(
  getFeatureRegisterBrandSelector,
  state => state.isFetchEmailError
);
export const getRegisterBrandIsFetchBrandError = createSelector(
  getFeatureRegisterBrandSelector,
  state => state.isFetchBrandError
);
export const getRegisterBrandIsFetchPasswordError = createSelector(
  getFeatureRegisterBrandSelector,
  state => state.isFetchPasswordError
);
export const getRegisterBrandFetchErrorMessage = createSelector(
  getFeatureRegisterBrandSelector,
  state => state.fetchErrorMessage
);

export const getRegisterBrandIsAnimationDone = createSelector(
  getFeatureRegisterBrandSelector,
  state => state.isAnimationDone
);
