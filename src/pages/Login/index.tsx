import React from 'react';

import { Container } from './styles';
import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import Input from '../../components/Input';
import Button from '../../components/Button';

import cardAcessIcon from '../../assets/icons/card.svg';
import lockIcon from '../../assets/icons/lock.svg';

const Login = () => {
  return (
    <Container>
      <Row>
        <Col column={1}>
          <div className="background">
            <h1>Template</h1>
          </div>
        </Col>
        <Col column={3}>
          <Input icon={cardAcessIcon} text="Username/Email" />
          <Input icon={lockIcon} text="Password" />
          <Button text="Sign In" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
