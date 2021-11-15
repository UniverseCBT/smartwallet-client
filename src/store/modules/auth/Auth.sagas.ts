import { all, takeLatest } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';

import { api } from 'services/api';
import { history } from 'services/history';

import { AuthActions } from './Auth.types';

function validToken() {
  const userToken = window.localStorage.getItem('bb:auth');

  if (!userToken) {
    return false;
  }

  api.defaults.headers.Authorization = `Bearer ${userToken}`;

  const jwtDecode = jwt.decode(userToken, { complete: true });
  const jwtExpiration = jwtDecode?.payload.exp;

  if (!jwtExpiration) {
    return false;
  }

  const expirationToken = jwtExpiration * 1000 >= new Date().getTime();

  return expirationToken;
}

function logout() {
  window.localStorage.removeItem('bb:auth');

  delete api.defaults.headers.Authorization;

  history.push('/login');
}

export default all([takeLatest(AuthActions.logoutRequest, logout)]);
