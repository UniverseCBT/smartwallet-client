import { useEffect, useState, useMemo } from 'react';
import jwt from 'jsonwebtoken';

import { api } from 'services/api';
import store from 'store';

type TokenResponse = {
  registered: boolean;
  validToken: boolean;
  loading: boolean;
};

export const useAuth = (): TokenResponse => {
  const { token } = store.getState().auth;

  const [userRegistered, setUserRegistered] = useState(false);
  const [validToken, setValidToken] = useState(false);
  const [loading, setLoading] = useState(true);

  const verifyToken: boolean = useMemo(() => {
    const token = window.localStorage.getItem('bb:auth');

    api.defaults.headers.Authorization = `Bearer ${token}`;

    if (!token) {
      return false;
    }

    const jwtDecode = jwt.decode(token, { complete: true });
    const jwtExpiration = jwtDecode?.payload.exp;

    if (!jwtExpiration) {
      return false;
    }

    const expirationToken = jwtExpiration * 1000 >= new Date().getTime();

    return expirationToken;
  }, []);

  useEffect(() => {
    const userStatus = verifyToken;

    async function loadRegisterUser() {
      try {
        const response = await api.get<{ hasRegistered: boolean }>(`/sessions`);
        const { hasRegistered } = response.data;

        setLoading(false);
        setUserRegistered(hasRegistered);
        setValidToken(userStatus);
      } catch {
        setLoading(false);
        setValidToken(false);
        setUserRegistered(false);
      }
    }

    loadRegisterUser();
  }, [verifyToken]);

  return {
    registered: userRegistered,
    validToken,
    loading
  };
};
