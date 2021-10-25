import { all, put, takeLatest } from 'redux-saga/effects';

import { api } from 'services/api';

import { setTokenSuccess } from './Auth.actions';

import { AuthActions } from './Auth.types';

export function* setToken(token: string) {
  if (!token) {
    return;
  }
  window.localStorage.setItem('bb:auth', token);

  yield put(setTokenSuccess(token));

  api.defaults.headers.common = {
    Authorization: `Bearer ${token}`
  };
}

export default all([takeLatest(AuthActions.setTokenRequest as any, setToken)]);
