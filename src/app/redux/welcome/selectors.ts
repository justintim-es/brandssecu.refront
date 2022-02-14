import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IWelcomeReducer } from './reducer';
const getWelcomeFeatureSelector = createFeatureSelector<IWelcomeReducer>('welcomeReducer');

export const getWelcomeBottomState = createSelector(
  getWelcomeFeatureSelector,
  state => state.bottomState
)

export const getWelcomeBottomIndex = createSelector(
  getWelcomeFeatureSelector,
  state => state.bottomIndex
)
export const getWelcomeToBottomState = createSelector(
  getWelcomeFeatureSelector,
  state => state.toBottomState
)
export const getWelcomeToBottomIndex = createSelector(
  getWelcomeFeatureSelector,
  state => state.toBottomIndex
)
export const getWelcomeIsToBottom = createSelector(
  getWelcomeFeatureSelector,
  state => state.isToBottom,
)
export const getWelcomeIsBottom = createSelector(
  getWelcomeFeatureSelector,
  state => state.isBottom,
)
