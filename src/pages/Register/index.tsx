import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../../components/_noauth/Wrapper';

import { Container } from './styles';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import Header from '../../components/_noauth/Header';
import Content from '../../components/_noauth/Content';
import Form from '../../components/_noauth/Form';
import SideNavigation from '../../components/_noauth/SideNavigation';

import Input from '../../components/Input';
import Button from '../../components/Button';

import nameIcon from '../../assets/icons/name.svg';
import emailIcon from '../../assets/icons/email.svg';
import cardAcessIcon from '../../assets/icons/card.svg';
import lockIcon from '../../assets/icons/lock.svg';

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
                <Input icon={nameIcon} type="text" text="Name" />
                <Input icon={cardAcessIcon} type="text" text="Username" />
                <Input icon={emailIcon} type="text" text="Email" />
                <Input icon={lockIcon} type="password" text="Password" />
                <Input icon={lockIcon} type="password" text="Repeat password" />
                <Button text="Next" />
              </Form>
            </Content>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Register;
