export enum AuthActions {
  loginRequest = 'AUTH/LOGIN_REQUEST',
  loginSuccess = 'AUTH/LOGIN_SUCCESS',
  loginFailed = 'AUTH/LOGIN_FAILED',
  logoutRequest = 'AUTH/LOGOUT_REQUEST',
  logoutSuccess = 'AUTH/LOGOUT_SUCCESS',
  logoutFailed = 'AUTH/LOGOUT_FAILED'
}

export type AuthRequest = {
  username?: string;
  email?: string;
  password: string;
};

export type AuthType = {
  token: string;
  loading: boolean;
};
