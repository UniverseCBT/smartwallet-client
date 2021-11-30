import { combineReducers } from 'redux';

import { auth } from './auth/Auth.reducer';
import { user } from './user/User.reducer';

export default combineReducers({
  user,
  auth
});
