import produce from 'immer';
import { Reducer } from 'redux';

import { User } from './User.types';

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
      default:
        return draft;
    }
  });
};

export { user };
