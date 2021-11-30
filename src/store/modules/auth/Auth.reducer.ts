import produce from 'immer';
import { Reducer } from 'redux';

import { AuthActions, AuthType } from './Auth.types';

const INITIAL_STATE: AuthType = {
  token: '',
  authorized: false,
  hasRegistered: false,
  loading: false
};

const auth: Reducer<AuthType> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case AuthActions.logoutRequest: {
        draft.loading = true;
        draft.authorized = false;
        break;
      }
      case AuthActions.logoutSuccess: {
        draft.loading = false;
        draft.authorized = false;
        break;
      }
      case AuthActions.logoutFailed: {
        draft.loading = false;
        draft.authorized = false;
        break;
      }

      case AuthActions.loggedRequest: {
        draft.loading = true;
        draft.authorized = false;
        break;
      }
      case AuthActions.loggedSuccess: {
        const { authorized, hasRegistered } = action.payload;

        draft.loading = false;
        draft.authorized = authorized;
        draft.hasRegistered = hasRegistered;
        break;
      }
      case AuthActions.loggedFailed: {
        draft.loading = false;
        draft.authorized = false;
        break;
      }

      case AuthActions.loginRequest: {
        draft.loading = true;
        draft.authorized = false;
        break;
      }
      case AuthActions.loginSuccess: {
        const { user } = action.payload;

        draft.user = user;
        draft.loading = false;
        draft.authorized = true;
        break;
      }
      case AuthActions.loginFailed: {
        draft.loading = false;
        draft.authorized = false;
        break;
      }
      default:
        return draft;
    }
  });
};

export { auth };
