import { combineReducers } from 'redux';

import { user } from './user/User.reducer';
import { auth } from './auth/Auth.reducer';

export default combineReducers({
  user,
  auth
});
