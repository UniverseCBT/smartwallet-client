import { useSelector } from 'react-redux';

import store from 'store';
import { loggedRequest } from 'store/modules/auth/Auth.actions';
import { AuthType } from 'store/modules/auth/Auth.types';
import { StoreState } from 'store/store.type';

type TokenResponse = {
  registered: boolean;
  authorized: boolean;
  loading: boolean;
};

/*
  event to see when page load start verify user token
*/
store.dispatch(loggedRequest());

export const useAuth = (): TokenResponse => {
  const { authorized, loading, hasRegistered } = useSelector<
    StoreState,
    AuthType
  >(state => state.auth);

  return {
    registered: hasRegistered,
    authorized,
    loading
  };
};
