import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps
} from 'react-router-dom';

import Auth from '../components/_auth/Auth';

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
  const signed = true;

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  const PrivateComponent = (props: RouteComponentProps) => {
    return signed ? (
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
