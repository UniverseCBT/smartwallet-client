import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import Content from '../../components/userAuth/Content';
import Form from '../../components/userAuth/Form';
import Input from '../../components/Input';

import Button from '../../components/Button';

import cardAcessIcon from '../../assets/icons/card.svg';
import lockIcon from '../../assets/icons/lock.svg';

const Login = () => {
  return (
    <Container>
      <Row>
        <Col column={1}>
          <div className="bg-login" />
        </Col>
        <Col column={3}>
          <Content>
            <p>
              Not a member?
              {' '}
              <Link to="/">Sign Up</Link>
            </p>
            <Form>
              <Input icon={cardAcessIcon} text="Name or email" />
              <Input icon={cardAcessIcon} type="text" text="Username" />
              <Input icon={lockIcon} type="password" text="Password" />
              <Input icon={lockIcon} type="password" text="Repeat password" />
              <div>
                <Link to="/">Forgot your password?</Link>
              </div>
              <Button text="Sign In" />
            </Form>
          </Content>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
