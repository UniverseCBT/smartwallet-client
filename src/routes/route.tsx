import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

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
  const signed = false;

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default RouteWrapper;
