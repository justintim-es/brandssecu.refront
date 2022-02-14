import { createAction, props } from '@ngrx/store';
import { IActionCreator } from '../combiner';
export const RDX_HOME_FETCH_IS_BOARDED = 'RDX_HOME_FETCH_IS_BOARDED';
export const rdxHomeFetchIsBoarded = createAction(RDX_HOME_FETCH_IS_BOARDED, props<IActionCreator<any>>());
export const RDX_HOME_FETCH_IS_BOARDED_SUCCESS = 'RDX_HOME_FETCH_IS_BOARDED_SUCCESS';
export const rdxHomeFetchIsBoardedSuccess = createAction(RDX_HOME_FETCH_IS_BOARDED_SUCCESS, props<IActionCreator<boolean>>());
export const RDX_HOME_FETCH_ONBOARD_LINK = 'RDX_HOME_FETCH_ONBOARD_LINK';
export const rdxHomeFetchOnboardLink = createAction(RDX_HOME_FETCH_ONBOARD_LINK, props<IActionCreator<any>>());
export const RDX_HOME_FETCH_ONBOARD_LINK_SUCCESS = 'RDX_HOME_FETCH_ONBOARD_LINK_SUCCESS';
export const rdxHomeFetchOnboardLinkSuccess = createAction(RDX_HOME_FETCH_ONBOARD_LINK, props<IActionCreator<string>>())
