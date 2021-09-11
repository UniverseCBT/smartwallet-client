import produce from 'immer';
import { Reducer } from 'redux';

import { User, UserActions } from './User.types';

const INITIAL_STATE: User = {
  user: {
    name: '',
    username: '',
    email: '',
    password: ''
  }
};

const user: Reducer<User> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case UserActions.addUserRequest: {
        const { user } = action.payload;

        // eslint-disable-next-line no-param-reassign
        draft.user = user;

        break;
      }
      default:
        return draft;
    }
  });
};

export { user };
