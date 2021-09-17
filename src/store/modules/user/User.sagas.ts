import { AxiosError, AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import { api } from 'services/api';
import { history } from 'services/history';

import { setTokenRequest } from 'store/modules/auth/Auth.actions';
import { addUserRequest, addUserFailed, addUserSuccess } from './User.actions';
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

    yield put(addUserSuccess(user));
    yield put(setTokenRequest(token));

    history.push('/register/income');
  } catch (err) {
    const error = err as AxiosError;

    const { field, message } = error.response?.data;

    yield put(addUserFailed(field, message));
  }
}

export default all([takeLatest(UserActions.addUserRequest, register)]);
