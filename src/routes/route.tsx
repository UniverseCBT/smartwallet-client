import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
  useLocation
} from 'react-router-dom';

import { useToken } from 'hooks/useToken';

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
  const location = useLocation().pathname.split('/')[1];

  const { validToken, registered, loading } = useToken();

  const userLogged = !isPrivate && validToken;
  const notLogged = isPrivate && !validToken;
  const isRegisterPage = location === 'register';

  if (userLogged) {
    if (!registered) {
      return <Redirect to="/register/income" />;
    }

    return <Redirect to="/" />;
  }

  if (notLogged) {
    if (isRegisterPage) {
      return <Redirect to="/register/perfil" />;
    }

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

  return loading ? (
    <h1>Carregando</h1>
  ) : (
    <Route {...rest} render={props => <PrivateComponent {...props} />} />
  );
};

export default RouteWrapper;
