import { AxiosError, AxiosResponse } from 'axios';
import jwt from 'jsonwebtoken';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { api } from 'services/api';
import { history } from 'services/history';

import { UserResponse } from '../user/User.types';
import {
  loggedFailed,
  loggedSuccess,
  loginFailed,
  loginRequest,
  loginSuccess,
  logoutFailed,
  logoutSuccess
} from './Auth.actions';
import { AuthActions } from './Auth.types';

function getToken() {
  const userToken = window.localStorage.getItem('bb:auth');

  if (!userToken) {
    return '';
  }

  api.defaults.headers.Authorization = `Bearer ${userToken}`;

  return userToken;
}

function validToken() {
  const userToken = getToken();

  if (!userToken) {
    return false;
  }

  const jwtDecode = jwt.decode(userToken, { complete: true });
  const jwtExpiration = jwtDecode?.payload.exp;

  if (!jwtExpiration) {
    return false;
  }

  const expirationToken = jwtExpiration * 1000 >= new Date().getTime();

  return expirationToken;
}

function setToken(token: string) {
  if (!token) {
    return;
  }

  const jwtDecode = jwt.decode(token, { complete: true });
  const jwtExpiration = jwtDecode?.payload.exp;

  if (!jwtExpiration) {
    return false;
  }

  const expirationToken = jwtExpiration * 1000 >= new Date().getTime();

  if (!expirationToken) {
    return;
  }

  api.defaults.headers.Authorization = `Bearer ${token}`;
  window.localStorage.setItem('bb:auth', token);
}

function* logged() {
  try {
    const tokenIsvalid = validToken();

    if (!tokenIsvalid) {
      yield put(loggedFailed());
    }

    const response: AxiosResponse<{ hasRegistered: boolean }> = yield call(
      api.get,
      '/sessions'
    );

    const { hasRegistered } = response.data;

    yield put(loggedSuccess(tokenIsvalid, hasRegistered));
  } catch (err) {
    yield put(loggedFailed());
  }
}

function* logout() {
  try {
    window.localStorage.removeItem('bb:auth');

    delete api.defaults.headers.Authorization;

    yield put(logoutSuccess());
    history.push('/login');
  } catch {
    yield put(logoutFailed());
  }
}

export type ActionPayload = ReturnType<typeof loginRequest>;

function* login({ payload }: ActionPayload) {
  const { usernameOrEmail, password } = payload;

  try {
    const userResponse: AxiosResponse<UserResponse> = yield call(
      api.post,
      '/sessions',
      {
        usernameOrEmail,
        password
      }
    );

    const { token, user } = userResponse.data;

    setToken(token);
    yield put(loginSuccess({ token, user }));

    const stepResponse: AxiosResponse<{ hasRegistered: boolean }> = yield call(
      api.get,
      '/sessions'
    );

    const { hasRegistered } = stepResponse.data;

    if (hasRegistered) {
      history.push('/');
      return;
    }

    history.push('/register/income');
  } catch (err) {
    const error = err as AxiosError;

    const { message } = error.response?.data;

    yield put(loginFailed(message));
  }
}

export default all([
  takeLatest(AuthActions.loginRequest, login),
  takeLatest(AuthActions.logoutRequest, logout),
  takeLatest(AuthActions.loggedRequest, logged)
]);
