import { createReducer, on } from '@ngrx/store';
import { rdxWelcomeNavigateRight, rdxWelcomeNavigateRightOne, rdxWelcomeNavigateRightTwo, rdxWelcomeNavigateLeft, rdxWelcomeNavigateLeftTwo, rdxWelcomeNavigateLeftOne } from './actions';
export interface IWelcomeReducer {
  isBottom: boolean;
  isToBottom: boolean;
  bottomState: string;
  toBottomState: string;
  bottomIndex: number,
  toBottomIndex: number;
}
export const welcomeInitial: IWelcomeReducer = {
  isBottom: true,
  isToBottom: false,
  bottomState: 'invision',
  toBottomState: '',
  bottomIndex: 0,
  toBottomIndex: 0,

}
export const welcomeReducer = createReducer(
  welcomeInitial,
  on(rdxWelcomeNavigateRight, (state: IWelcomeReducer) => {
    return {
      ...state,
      isToBottom: true,
      bottomState: 'invision-absolute',
      toBottomState: 'left',
      toBottomIndex:  state.bottomIndex > -4 ? state.bottomIndex -1 : 0
    }
  }),
  on(rdxWelcomeNavigateLeft, (state: IWelcomeReducer) => {
    return {
      ...state,
      isToBottom: true,
      bottomState: 'invision-absolute',
      toBottomState: 'right',
      toBottomIndex: state.bottomIndex < 4 ? state.bottomIndex + 1 : 0
    }
  }),
  on(rdxWelcomeNavigateRightOne, (state: IWelcomeReducer) => {
    return {
      ...state,
      bottomState: 'right-absolute',
      toBottomState: 'invision',
    }
  }),
  on(rdxWelcomeNavigateLeftOne, (state: IWelcomeReducer) => {
    return {
      ...state,
      bottomState: 'left-absolute',
      toBottomState: 'invision',
    };
  }),
  on(rdxWelcomeNavigateRightTwo, (state: IWelcomeReducer) => {
    return {
      ...state,
      bottomState: 'invision',
      bottomIndex: state.toBottomIndex,
      isToBottom: false,
    }
  }),
  on(rdxWelcomeNavigateLeftTwo, (state: IWelcomeReducer) => {
    return {
      ...state,
      bottomState: 'invision',
      bottomIndex: state.toBottomIndex,
      isToBottom: false,
    }
  })
)
