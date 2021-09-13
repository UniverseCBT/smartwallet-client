export enum UserActions {
  addUserRequest = 'ADD/USER_REQUEST',
  addUserSuccess = 'ADD/USER_SUCCESS',
  addUserFailed = 'ADD/USER_FAILED'
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
  field?: string;
  message?: string;
  loading: boolean;
};

export type UserResponse = {
  token: string;
  user: Omit<UserType, 'confirmPassword'>;
};
