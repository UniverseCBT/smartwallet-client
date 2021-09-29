import React, { useEffect, useState } from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
  useLocation
} from 'react-router-dom';
import jwt_decode, { JwtPayload } from 'jwt-decode';

import { api } from 'services/api';

import Auth from 'components/_auth/Auth';

type Props = {
  isPrivate?: boolean;
  registerStep?: boolean;
  component: React.ComponentType;
} & RouteProps;

type RegisterStepProps = {
  page: 'income' | 'expense' | 'overview';
  registered: boolean;
};

const RouteWrapper = ({
  isPrivate,
  registerStep,
  component: Component,
  ...rest
}: Props) => {
  const [signed, setSigned] = useState(false);
  const [token, setToken] = useState('');
  const [redirect, setRedirect] = useState('/');

  const { pathname } = useLocation();

  useEffect(() => {
    const [, stepPath] = pathname.split('/');

    try {
      const getToken = window.localStorage.getItem('bb:auth');

      if (!getToken) {
        window.localStorage.removeItem('bb:auth');
        setSigned(false);

        if (stepPath === 'register') {
          setRedirect('/register/perfil');
          return;
        }

        setRedirect('/login');
      }

      if (getToken) {
        setToken(getToken);
        const { exp } = jwt_decode<JwtPayload>(getToken);

        setSigned(true);

        api.defaults.headers.common = {
          Authorization: `Bearer ${getToken}`
        };

        if (exp) {
          const expirationToken = exp >= new Date().getTime() / 1000;

          if (!expirationToken) {
            setSigned(false);
            window.localStorage.removeItem('bb:auth');
          }
        }

        setRedirect('/');
      }
    } catch (err) {
      window.localStorage.removeItem('bb:auth');
      setSigned(false);

      if (stepPath === 'register') {
        setRedirect('/register/perfil');
        return;
      }

      setRedirect('/login');
    }
  }, [pathname]);

  if (!signed && isPrivate && registerStep) {
    return <Redirect to={redirect} />;
  }

  if (signed && !isPrivate && !registerStep) {
    return <Redirect to="/" />;
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
