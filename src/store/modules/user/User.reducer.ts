import produce from 'immer';
import { Reducer } from 'redux';

import { User, UserActions } from './User.types';

const INITIAL_STATE: User = {
  user: {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  },
  field: '',
  message: ''
};

const user: Reducer<User> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case UserActions.addUserRequest: {
        const { user } = action.payload;

        draft.user = user;

        break;
      }
      // case UserActions.addUserFailed: {
      //   const;

      //   break;
      // }
      default:
        return draft;
    }
  });
};

export { user };
