export enum AuthActions {
  loginRequest = 'AUTH/LOGIN_REQUEST',
  loginSuccess = 'AUTH/LOGIN_SUCCESS',
  loginFailed = 'AUTH/LOGIN_FAILED'
}

export type AuthType = {
  signed: boolean;
};

export type AuthRequest = {
  username?: string;
  email?: string;
  password: string;
};
