import { createAction, props} from '@ngrx/store';
import { IActionCreator } from '../combiner';
export const RDX_UNEXPECTED_ERROR_SET  = 'RDX_UNEXPECTED_ERROR_SET';
export const rdxUnexpectedErrorSet = createAction(RDX_UNEXPECTED_ERROR_SET, props<IActionCreator<string>>())
export const RDX_UNEXPECTED_ERROR_RESET  = 'RDX_UNEXPECTED_ERROR_RESET';
export const rdxUnexpectedErrorReset = createAction(RDX_UNEXPECTED_ERROR_RESET, props<IActionCreator<any>>())
