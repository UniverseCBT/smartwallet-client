import { User } from './modules/user/User.types';
import { AuthType } from './modules/auth/Auth.types';

export type StoreState = {
  user: User;
  auth: AuthType;
};
