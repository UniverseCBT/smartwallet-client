import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import Header from '../../components/_auth/Header';
import Content from '../../components/_auth/Content';
import Form from '../../components/_auth/Form';
import SideNavigation from '../../components/_auth/SideNavigation';

import Input from '../../components/Input';
import Button from '../../components/Button';

import cardAcessIcon from '../../assets/icons/card.svg';
import lockIcon from '../../assets/icons/lock.svg';

const Login = () => {
  return (
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
              <Input icon={cardAcessIcon} type="text" text="Name" />
              <Input icon={cardAcessIcon} type="text" text="Username" />
              <Input icon={cardAcessIcon} type="text" text="Email" />
              <Input icon={lockIcon} type="password" text="Password" />
              <Input icon={lockIcon} type="password" text="Repeat password" />
              <Button text="Next" />
            </Form>
          </Content>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
