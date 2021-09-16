import { AuthActions, AuthRequest } from './Auth.types';

export function loginRequest({ username, email, password }: AuthRequest) {
  return {
    type: AuthActions.loginRequest,
    payload: {
      usernameOrEmail: username || email,
      password
    }
  };
}
