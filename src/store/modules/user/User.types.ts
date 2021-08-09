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
};

export type User = {
  user: UserType;
};
