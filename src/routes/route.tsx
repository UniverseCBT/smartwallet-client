import React, { useEffect, useState } from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
  useLocation
} from 'react-router-dom';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { AxiosError } from 'axios';

import { api } from 'services/api';

import Auth from 'components/_auth/Auth';

type Props = {
  isPrivate?: boolean;
  registerStep?: boolean;
  component: React.ComponentType;
} & RouteProps;

const RouteWrapper = ({
  isPrivate,
  registerStep,
  component: Component,
  ...rest
}: Props) => {
  const location = useLocation();

  const [hasRegistered, setHasRegistered] = useState<boolean>(false);
  const [hasToken, setHasToken] = useState<boolean>(false);

  useEffect(() => {
    async function loadAuth() {
      const registerStep = location.pathname.split('/')[2];

      try {
        const token = window.localStorage.getItem('bb:auth');

        const { hasRegistered } = (
          await api.get<{ hasRegistered: boolean }>(
            `/sessions/${registerStep ?? 'overview'}`,
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
        ).data;

        if (hasRegistered) {
          setHasRegistered(true);
        }

        setHasRegistered(false);
      } catch (err) {
        const error = err as AxiosError;

        console.log(error.response?.data);
      }
    }

    loadAuth();
  }, [location.pathname]);

  useEffect(() => {
    const token = window.localStorage.getItem('bb:auth');

    if (token) {
      setHasToken(true);
    }
  }, []);

  if (!isPrivate && hasToken) {
    if (!hasRegistered) {
      return <Redirect to="/register/income" />;
    }

    return <Redirect to="/" />;
  }

  if (isPrivate && !hasToken) {
    return <Redirect to="/login" />;
  }

  const PrivateComponent = (props: RouteComponentProps) => {
    return isPrivate ? (
      <Auth registerStep={registerStep}>
        <Component {...props} />
      </Auth>
    ) : (
      <Component {...props} />
    );
  };

  return <Route {...rest} render={props => <PrivateComponent {...props} />} />;
};

export default RouteWrapper;
