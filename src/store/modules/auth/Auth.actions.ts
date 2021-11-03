import { AuthActions, AuthRequest } from './Auth.types';

export function logoutRequest() {
  return {
    type: AuthActions.logoutRequest
  };
}

export function logoutSuccess() {
  return {
    type: AuthActions.logoutSuccess
  };
}

export function logoutFailed() {
  return {
    type: AuthActions.logoutFailed
  };
}

export function loginRequest({ username, email, password }: AuthRequest) {
  return {
    type: AuthActions.loginRequest,
    payload: {
      usernameOrEmail: username || email,
      password
    }
  };
}
