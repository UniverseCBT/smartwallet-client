import React from 'react';

import Row from '../../Grid/Row';
import Col from '../../Grid/Col';

import Navigation from '../../Navigation';

import { Container, Main, Content } from './styles';

type Props = {
  children: React.ReactNode;
  registerStep?: boolean;
};

const Auth = ({ children, registerStep }: Props) => {
  return registerStep ? (
    <>{children}</>
  ) : (
    <Container>
      <Row auth>
        <Navigation />
        <Col>
          <Main>
            <Content>{children}</Content>
          </Main>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
