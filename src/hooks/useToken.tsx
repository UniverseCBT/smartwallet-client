import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';

import { api } from 'services/api';

type TokenResponse = {
  registered: boolean;
  validToken: boolean;
  loading: boolean;
};

export const useToken = (): TokenResponse => {
  const [userRegistered, setUserRegistered] = useState<boolean>(false);
  const [validToken, setValidToken] = useState(false);
  const [loading, setLoading] = useState(true);

  const verifyToken = (): boolean => {
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
  };

  useEffect(() => {
    const userStatus = verifyToken();
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
  }, []);

  return {
    registered: userRegistered,
    validToken,
    loading
  };
};
