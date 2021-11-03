import { all, takeLatest } from 'redux-saga/effects';

import { api } from 'services/api';
import { history } from 'services/history';

import { AuthActions } from './Auth.types';

function logout() {
  window.localStorage.removeItem('bb:auth');

  delete api.defaults.headers.Authorization;

  history.push('/login');
}

export default all([takeLatest(AuthActions.logoutRequest, logout)]);
