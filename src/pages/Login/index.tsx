import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../../components/_noauth/Wrapper';

import { Container, Footer } from './styles';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import SideNavigation from '../../components/_noauth/SideNavigation';
import Header from '../../components/_noauth/Header';
import Content from '../../components/_noauth/Content';
import Form from '../../components/_noauth/Form';
import Input from '../../components/Input';

import Button from '../../components/Register/Button';

import LoginArt from '../../components/icons/LoginArt';

const Login = () => {
  return (
    <Wrapper>
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
              <div>
                <Input inputName="usernameOrEmail" text="Username/Email" />
                <Input inputName="password" type="password" text="Password" />
              </div>
              <Footer>
                <Link to="/">Forgot your password?</Link>
                <Button text="Sign In" />
              </Footer>
            </Form>
          </Content>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Login;
