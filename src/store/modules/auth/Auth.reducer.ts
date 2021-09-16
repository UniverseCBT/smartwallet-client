import produce from 'immer';
import { Reducer } from 'redux';

import { AuthType, AuthActions } from './Auth.types';

const INITIAL_STATE: AuthType = {
  signed: false
};

const auth: Reducer<AuthType> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case AuthActions.loginRequest: {
        draft.signed = true;

        break;
      }
      default:
        return draft;
    }
  });
};

export { auth };
