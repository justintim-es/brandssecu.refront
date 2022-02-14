import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IHomeReducer } from './reducer';
const getFeatureHomeSelector = createFeatureSelector<IHomeReducer>('homeReducer');

export const getHomeIsFetch = createSelector(
  getFeatureHomeSelector,
  state => state.isFetch
)
export const getHomeIsBoarded = createSelector(
  getFeatureHomeSelector,
  state => state.isBoarded
)
