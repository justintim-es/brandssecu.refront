import { createReducer, on } from '@ngrx/store';
import { rdxUnexpectedErrorSet, rdxUnexpectedErrorReset } from './actions';
export interface IUnexpectedErrorReducer {
  is: boolean;
  error: string;
}
export const unexpectedErrorInitial: IUnexpectedErrorReducer = {
  is: false,
  error: ''
}
export const unexpectedErrorReducer = createReducer(
  unexpectedErrorInitial,
  on(rdxUnexpectedErrorSet, (state: IUnexpectedErrorReducer, action) => {
    return {
      ...state,
      is: true,
      error: action.payload!
    };
  }),
  on(rdxUnexpectedErrorReset, (state: IUnexpectedErrorReducer, action) => {
    return {
      ...state,
      is: false,
      error: ''
    };
  })
);
