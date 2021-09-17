export enum AuthActions {
  loginRequest = 'AUTH/LOGIN_REQUEST',
  loginSuccess = 'AUTH/LOGIN_SUCCESS',
  loginFailed = 'AUTH/LOGIN_FAILED',
  setTokenRequest = 'AUTH/SET_TOKEN_REQUEST',
  setTokenSuccess = 'AUTH/SET_TOKEN_SUCCESS',
  setTokenFailed = 'AUTH/SET_TOKEN_FAILED'
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
