import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import Content from '../../components/userAuth/Content';
import Form from '../../components/userAuth/Form';
import Input from '../../components/Input';

import Button from '../../components/Button';

import LoginArt from '../../components/icons/LoginArt';

import cardAcessIcon from '../../assets/icons/card.svg';
import lockIcon from '../../assets/icons/lock.svg';

const Login = () => {
  return (
    <Container>
      <Row>
        <Col column={1}>
          <div className="bg-login">
            <h1>Let`s sign you in</h1>
            <p>Welcome back.</p>
            <LoginArt />
          </div>
        </Col>
        <Col column={3}>
          <Content>
            <p>
              Not a member?
              {' '}
              <Link to="/">Sign Up</Link>
            </p>
            <Form>
              <Input icon={cardAcessIcon} text="Username/Email" />
              <Input icon={lockIcon} type="password" text="Password" />
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
