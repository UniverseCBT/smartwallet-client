import { UserType, UserActions } from './User.types';

export function addUserRequest(user: UserType) {
  return {
    type: UserActions.addUserRequest,
    payload: {
      user
    }
  };
}

export function addUserSuccess(user: Omit<UserType, 'confirmPassword'>) {
  return {
    type: UserActions.addUserSuccess,
    payload: {
      user
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
