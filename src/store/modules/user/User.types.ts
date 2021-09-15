export enum UserActions {
  addUserRequest = 'ADD/USER_REQUEST',
  addUserSuccess = 'ADD/USER_SUCCESS',
  addUserFailed = 'ADD/USER_FAILED',
  verifyToken = 'VERIFY/USER_TOKEN'
}

export type UserType = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type User = {
  user: UserType;
  token?: string;
  field: string;
  message: string;
  loading: boolean;
};

export type UserResponse = {
  token: string;
  user: Omit<UserType, 'confirmPassword'>;
};
