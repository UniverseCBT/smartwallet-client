import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import { api } from 'services/api';

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

    yield put(addUserSuccess(user, token));
  } catch (err) {
    const { field, message } = err.response.data;

    yield put(addUserFailed(field, message));
  }
}

export default all([takeLatest(UserActions.addUserRequest, register)]);
