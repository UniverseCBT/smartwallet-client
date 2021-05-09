import React from 'react';

import Navigation from '../../Navigation';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  registerStep?: boolean;
};

const Auth = ({ children, registerStep }: Props) => {
  return registerStep ? (
    <>{children}</>
  ) : (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default Auth;
