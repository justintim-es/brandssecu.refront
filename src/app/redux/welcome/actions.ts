import { IActionCreator } from '../combiner';
import { createAction, props } from '@ngrx/store';
export const RDX_WELCOME_NAVIGATE_RIGHT = 'RDX_WELCOME_NAVIGATE_RIGHT';
export const rdxWelcomeNavigateRight = createAction(RDX_WELCOME_NAVIGATE_RIGHT, props<IActionCreator<any>>());
export const RDX_WELCOME_NAVIGATE_RIGHT_ONE =  'RDX_WELCOME_NAVIGATE_RIGHT_ONE';
export const rdxWelcomeNavigateRightOne = createAction(RDX_WELCOME_NAVIGATE_RIGHT_ONE, props<IActionCreator<any>>());
export const RDX_WELCOME_NAVIGATE_RIGHT_TWO = 'RDX_WELCOME_NAVIGATE_RIGHT_TWO';
export const rdxWelcomeNavigateRightTwo = createAction(RDX_WELCOME_NAVIGATE_RIGHT_TWO, props<IActionCreator<any>>());

export const RDX_WELCOME_NAVIGATE_LEFT = 'RDX_WELCOME_NAVIGATE_LEFT';
export const rdxWelcomeNavigateLeft = createAction(RDX_WELCOME_NAVIGATE_LEFT, props<IActionCreator<any>>());
export const RDX_WELCOME_NAVIGATE_LEFT_ONE =  'RDX_WELCOME_NAVIGATE_LEFT_ONE';
export const rdxWelcomeNavigateLeftOne = createAction(RDX_WELCOME_NAVIGATE_LEFT_ONE, props<IActionCreator<any>>());
export const RDX_WELCOME_NAVIGATE_LEFT_TWO = 'RDX_WELCOME_NAVIGATE_LEFT_TWO';
export const rdxWelcomeNavigateLeftTwo = createAction(RDX_WELCOME_NAVIGATE_LEFT_TWO, props<IActionCreator<any>>());
