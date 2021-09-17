import { AuthActions, AuthRequest } from './Auth.types';

export function setTokenRequest(token: string) {
  return {
    type: AuthActions.setTokenRequest,
    payload: {
      token
    }
  };
}

export function setTokenSuccess(token: string) {
  return {
    type: AuthActions.setTokenSuccess,
    payload: {
      token
    }
  };
}

export function setTokenFailed() {
  return {
    type: AuthActions.setTokenSuccess
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
