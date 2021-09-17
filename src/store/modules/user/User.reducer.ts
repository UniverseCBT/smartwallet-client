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
  message: '',
  loading: false
};

const user: Reducer<User> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case UserActions.addUserRequest: {
        const { user } = action.payload;

        draft.loading = true;
        draft.message = '';
        draft.field = '';
        draft.user = user;

        break;
      }
      case UserActions.addUserSuccess: {
        draft.message = '';
        draft.field = '';
        draft.loading = false;

        break;
      }
      case UserActions.addUserFailed: {
        const { field, message } = action.payload;

        draft.message = message;
        draft.field = field;
        draft.loading = false;

        break;
      }
      default:
        return draft;
    }
  });
};

export { user };
