import { all } from 'redux-saga/effects';

import userSaga from './user/User.sagas';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* rootSaga(): any {
  return yield all([userSaga]);
}
