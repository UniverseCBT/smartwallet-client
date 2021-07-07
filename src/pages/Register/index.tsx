import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import Wrapper from '../../components/_noauth/Wrapper';

import * as S from './styles';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import Header from '../../components/_noauth/Header';
import Content from '../../components/_noauth/Content';
import Form from '../../components/_noauth/Form';
import SideNavigation from '../../components/_noauth/SideNavigation';

import Input, { InputProps } from '../../components/Input';
import RegisterButton from '../../components/Register/Button';

import arrowRightIcon from '../../assets/icons/arrowRight.svg';

type RegisterFormInput = {
  name: string;
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterFormInput>();

  const onSubmit: SubmitHandler<RegisterFormInput> = data => {
    console.log(data);
  };

  const inputValue: InputProps[] = [
    {
      inputName: 'name',
      type: 'text',
      text: 'Name'
    },
    {
      inputName: 'username',
      type: 'text',
      text: 'Username'
    },
    {
      inputName: 'email',
      type: 'text',
      text: 'Email'
    },
    {
      inputName: 'password',
      type: 'password',
      text: 'Password'
    },
    {
      inputName: 'confirmPassword',
      type: 'password',
      text: 'Repeat your password'
    }
  ];

  return (
    <Wrapper>
      <S.Container>
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
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="description">
                  <h1>Lets start with your account</h1>
                  <p>
                    Tip: make a list on everything you spend more than twice a
                    month
                  </p>
                </div>
                <div>
                  {inputValue.map(inputItem => (
                    <Input
                      register={register}
                      inputName={inputItem.inputName}
                      type={inputItem.type}
                      text={inputItem.text}
                      key={inputItem.inputName}
                    />
                  ))}
                </div>
                <S.Footer>
                  <RegisterButton
                    text="Next"
                    icon={{
                      url: arrowRightIcon,
                      altText: 'Arrow Right',
                      side: 'right'
                    }}
                    type="submit"
                  />
                </S.Footer>
              </Form>
            </Content>
          </Col>
        </Row>
      </S.Container>
    </Wrapper>
  );
};

export default Register;
