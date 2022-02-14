import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMainReducer } from './reducer';
const getFeatureMainSelector = createFeatureSelector<IMainReducer>('mainReducer');

export const getMainIsFetch = createSelector(
  getFeatureMainSelector,
  state => state.isFetch
)
export const getMainIsConfirmed = createSelector(
  getFeatureMainSelector,
  state => state.isConfirmed
)
export const getMainIsRouteHome = createSelector(
  getFeatureMainSelector,
  state => state.isRouteHome
)
