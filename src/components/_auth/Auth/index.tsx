import React from 'react';

import Row from '../../Grid/Row';
import Col from '../../Grid/Col';

import Navigation from '../../Navigation';
import NavigationPerfil from '../../NavigationPerfil';

import { Wrapper, Container, Main, Content } from './styles';

type Props = {
  children: React.ReactNode;
  registerStep?: boolean;
};

const Auth = ({ children, registerStep }: Props) => {
  return registerStep ? (
    <>{children}</>
  ) : (
    <Wrapper>
      <Row auth>
        <Navigation />
        <Container>
          <Row>
            <NavigationPerfil />
            <Col column="auto">
              <Main>
                <Content>{children}</Content>
              </Main>
            </Col>
          </Row>
        </Container>
      </Row>
    </Wrapper>
  );
};

export default Auth;
