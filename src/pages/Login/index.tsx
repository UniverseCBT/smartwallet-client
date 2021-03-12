import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../../components/_noauth/Wrapper';

import { Container } from './styles';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import SideNavigation from '../../components/_noauth/SideNavigation';
import Header from '../../components/_noauth/Header';
import Content from '../../components/_noauth/Content';
import Form from '../../components/_noauth/Form';
import Input from '../../components/Input';

import Button from '../../components/Button';

import LoginArt from '../../components/icons/LoginArt';

import cardAcessIcon from '../../assets/icons/card.svg';
import lockIcon from '../../assets/icons/lock.svg';

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col column={1}>
            <SideNavigation>
              <h1>Let`s sign you in</h1>
              <p>Welcome back.</p>
              <div className="art">
                <LoginArt />
              </div>
            </SideNavigation>
          </Col>
          <Col column={3}>
            <Content>
              <Header>
                <p>
                  {`Not a member ? `}
                  <Link to="/register/perfil">Sign Up</Link>
                </p>
              </Header>
              <Form>
                <div className="description">
                  <h1>Welcome Back!</h1>
                  <p>Let`s sign you in</p>
                </div>
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
    </Wrapper>
  );
};

export default Login;
