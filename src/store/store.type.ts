import { AuthType } from './modules/auth/Auth.types';
import { User } from './modules/user/User.types';

export type StoreState = {
  user: User;
  auth: AuthType;
};
