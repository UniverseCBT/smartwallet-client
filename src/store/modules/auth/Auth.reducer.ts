import produce from 'immer';
import { Reducer } from 'redux';

import { AuthType, AuthActions } from './Auth.types';

const INITIAL_STATE: AuthType = {
  token: '',
  loading: false
};

const auth: Reducer<AuthType> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case AuthActions.logoutRequest: {
        draft.loading = true;
        break;
      }
      case AuthActions.logoutSuccess: {
        draft.loading = false;
        break;
      }
      case AuthActions.logoutFailed: {
        draft.loading = false;
        break;
      }
      default:
        return draft;
    }
  });
};

export { auth };
