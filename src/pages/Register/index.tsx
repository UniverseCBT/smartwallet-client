import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../../components/_noauth/Wrapper';

import { Container, Footer } from './styles';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import Header from '../../components/_noauth/Header';
import Content from '../../components/_noauth/Content';
import Form from '../../components/_noauth/Form';
import SideNavigation from '../../components/_noauth/SideNavigation';

import Input from '../../components/Input';
import RegisterButton from '../../components/Register/Button';

import arrowRightIcon from '../../assets/icons/arrowRight.svg';

const Register = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col column={1}>
            <SideNavigation />
          </Col>
          <Col column={3}>
            <Content>
              <Header>
                <div className="back-login">
                  <Link to="/login">
                    <strong>{'<'}</strong>
                    Back to login
                  </Link>
                </div>
                <p>
                  {`Having trouble ? `}
                  <Link to="/">Get Help</Link>
                </p>
              </Header>
              <Form>
                <div className="description">
                  <h1>Lets start with your account</h1>
                  <p>
                    Tip: make a list on everything you spend more than twice a
                    month
                  </p>
                </div>
                <div>
                  <Input inputName="name" type="text" text="Name" />
                  <Input inputName="username" type="text" text="Username" />
                  <Input inputName="email" type="text" text="Email" />
                  <Input inputName="password" type="password" text="Password" />
                  <Input
                    inputName="confirmPassword"
                    type="password"
                    text="Repeat password"
                  />
                </div>
                <Footer>
                  <RegisterButton
                    text="Next"
                    icon={{
                      url: arrowRightIcon,
                      altText: 'Arrow Right',
                      side: 'right'
                    }}
                  />
                </Footer>
              </Form>
            </Content>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Register;
