import { UserActions, UserType } from './User.types';

export function addUserRequest(user: UserType) {
  return {
    type: UserActions.addUserRequest,
    payload: {
      user
    }
  };
}

export function addUserSuccess(
  user: Omit<UserType, 'confirmPassword'>,
  token: string
) {
  return {
    type: UserActions.addUserSuccess,
    payload: {
      user,
      token
    }
  };
}

export function addUserFailed(field: string, message: string) {
  return {
    type: UserActions.addUserFailed,
    payload: {
      field,
      message
    }
  };
}
