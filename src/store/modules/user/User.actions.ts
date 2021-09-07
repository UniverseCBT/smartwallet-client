import { UserType, UserActions } from './User.types';

export function addUserRequest(user: UserType) {
  return {
    type: UserActions.addUserRequest,
    payload: {
      user
    }
  };
}

export function addUserSuccess(user: UserType) {
  return {
    type: UserActions.addUserRequest,
    payload: {
      user
    }
  };
}

export function addUserFailed(userId: number) {
  return {
    type: UserActions.addUserRequest,
    payload: {
      userId
    }
  };
}
