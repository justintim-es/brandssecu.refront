import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUnexpectedErrorReducer } from './reducer';
const getFeatureUnexpectedErrorSelector = createFeatureSelector<IUnexpectedErrorReducer>('unexpectedErrorReducer');

export const getUnexpectedErrorError = createSelector(
  getFeatureUnexpectedErrorSelector,
  state => state.error
);
export const getUnexpectedErrorIs = createSelector(
  getFeatureUnexpectedErrorSelector,
  state => state.is
);
