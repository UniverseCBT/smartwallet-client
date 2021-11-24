import { AxiosError, AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { api } from 'services/api';
import { history } from 'services/history';

import { addUserFailed, addUserRequest, addUserSuccess } from './User.actions';
import { UserActions, UserResponse } from './User.types';

export type ActionPayload = ReturnType<typeof addUserRequest>;

function* register({ payload }: ActionPayload) {
  const data = payload.user;

  try {
    const response: AxiosResponse<UserResponse> = yield call(
      api.post,
      '/users',
      data
    );

    const { user, token } = response.data;

    yield put(addUserSuccess(user, token));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    window.localStorage.setItem('bb:auth', token);

    history.go(0);
  } catch (err) {
    const error = err as AxiosError;

    const { field, message } = error.response?.data;

    yield put(addUserFailed(field, message));
  }
}

export default all([takeLatest(UserActions.addUserRequest, register)]);
