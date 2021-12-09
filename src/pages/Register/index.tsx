import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { loggedRequest } from 'store/modules/auth/Auth.actions';
import { addUserRequest } from 'store/modules/user/User.actions';
import { User } from 'store/modules/user/User.types';
import { StoreState } from 'store/store.type';

import Content from 'components/_noauth/Content';
import Form from 'components/_noauth/Form';
import Header from 'components/_noauth/Header';
import SideNavigation from 'components/_noauth/SideNavigation';
import Wrapper from 'components/_noauth/Wrapper';
import Col from 'components/Grid/Col';
import Row from 'components/Grid/Row';
import Input from 'components/Input';
import RegisterButton from 'components/Register/Button';

import * as S from './styles';

import arrowRightIcon from 'assets/icons/arrowRight.svg';

type RegisterFormInput = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  name: yup.string().required('Name is a required field.'),
  username: yup.string().required('Username is a required field'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(6, 'Password mus be at least 6 characteres')
    .required('Password is a required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], `Passwords don't match`)
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch
  } = useForm<RegisterFormInput>({
    resolver: yupResolver(schema)
  });
  const values = watch();

  const [emptyValues, setEmptyValues] = useState(true);

  const user = useSelector<StoreState, User>(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      values.name &&
      values.name.length > 0 &&
      values.username &&
      values.username.length > 0 &&
      values.email &&
      values.email.length > 0 &&
      values.password &&
      values.password.length > 0 &&
      values.confirmPassword &&
      values.confirmPassword.length > 0
    ) {
      setEmptyValues(false);
      return;
    }

    setEmptyValues(true);
  }, [values]);

  const onSubmit = useCallback(
    (data: RegisterFormInput) => {
      dispatch(addUserRequest(data));
      dispatch(loggedRequest());
    },
    [dispatch]
  );

  useEffect(() => {
    setError(
      user.field as
        | 'name'
        | 'username'
        | 'email'
        | 'password'
        | 'confirmPassword',
      {
        type: 'manual',
        message: user.message
      }
    );
  }, [user, setError]);

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
                  <Input
                    register={register}
                    inputName="name"
                    type="text"
                    text="Name"
                    placeholder="Typing your full name"
                    errorMessage={errors.name?.message}
                  />
                  <Input
                    register={register}
                    inputName="username"
                    type="text"
                    text="Username"
                    placeholder="Typing your username"
                    errorMessage={errors.username?.message}
                  />
                  <Input
                    register={register}
                    inputName="email"
                    type="text"
                    text="Email"
                    placeholder="Typing your email"
                    errorMessage={errors.email?.message}
                  />
                  <Input
                    register={register}
                    inputName="password"
                    type="password"
                    text="Password"
                    placeholder="Typing your password"
                    errorMessage={errors.password?.message}
                  />
                  <Input
                    inputName="confirmPassword"
                    type="password"
                    text="Repeat Password"
                    placeholder="Confirm your password"
                    register={register}
                    errorMessage={errors.confirmPassword?.message}
                  />
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
                    disabled={emptyValues}
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
