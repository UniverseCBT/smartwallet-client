import { AxiosResponse } from 'axios';
import jwt from 'jsonwebtoken';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { api } from 'services/api';
import { history } from 'services/history';

import {
  loggedFailed,
  loggedSuccess,
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

    history.push('/login');
    yield put(logoutSuccess());
  } catch {
    yield put(logoutFailed());
  }
}

export default all([
  takeLatest(AuthActions.logoutRequest, logout),
  takeLatest(AuthActions.loggedRequest, logged)
]);
