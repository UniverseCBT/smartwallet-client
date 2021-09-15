import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps
} from 'react-router-dom';

import store from 'store';

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
  // Verify if bearer is valid with saga middleware
  const { token } = store.getState().user;

  if (!!token && !isPrivate) {
    return <Redirect to="/" />;
  }

  if (!token && isPrivate) {
    return <Redirect to="/login" />;
  }

  const PrivateComponent = (props: RouteComponentProps) => {
    return token ? (
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
