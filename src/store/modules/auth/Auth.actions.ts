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

export function loggedRequest() {
  return {
    type: AuthActions.loggedRequest
  };
}

export function loggedSuccess(authorized: boolean, hasRegistered: boolean) {
  return {
    type: AuthActions.loggedSuccess,
    payload: {
      authorized,
      hasRegistered
    }
  };
}

export function loggedFailed() {
  return {
    type: AuthActions.loggedFailed
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
