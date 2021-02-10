import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import Form from '../../components/userAuth/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import cardAcessIcon from '../../assets/icons/card.svg';
import lockIcon from '../../assets/icons/lock.svg';
import artBg from '../../assets/login-art.svg';

const Login = () => {
  return (
    <Container>
      <Row>
        <Col column={1}>
          <div className="bg-login">
            <h1>Let`s sign you in</h1>
            <p>Welcome back.</p>
            <img src={artBg} alt="art" />
          </div>
        </Col>
        <Col column={3}>
          <Form>
            <form>
              <Input icon={cardAcessIcon} text="Username/Email" />
              <Input icon={lockIcon} text="Password" />
              <Button text="Sign In" />
              <div>
                <Link to="/">Forgot Password</Link>
              </div>
              <p>
                Not a member?
                {' '}
                <Link to="/">Sign Up</Link>
              </p>
            </form>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
