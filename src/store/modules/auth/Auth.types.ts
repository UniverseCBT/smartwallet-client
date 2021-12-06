import { UserType } from '../user/User.types';

export enum AuthActions {
  loginRequest = 'AUTH/LOGIN_REQUEST',
  loginSuccess = 'AUTH/LOGIN_SUCCESS',
  loginFailed = 'AUTH/LOGIN_FAILED',

  logoutRequest = 'AUTH/LOGOUT_REQUEST',
  logoutSuccess = 'AUTH/LOGOUT_SUCCESS',
  logoutFailed = 'AUTH/LOGOUT_FAILED',

  loggedRequest = 'AUTH/LOGGED_REQUEST',
  loggedFailed = 'AUTH/LOGGED_FAILED',
  loggedSuccess = 'AUTH/LOGGED_SUCCESS'
}

export type AuthRequest = {
  usernameOrEmail: string;
  password: string;
};

export type AuthType = {
  token: string;
  loading: boolean;
  authorized: boolean;
  hasRegistered: boolean;
  message: string;
  user?: UserType;
};
