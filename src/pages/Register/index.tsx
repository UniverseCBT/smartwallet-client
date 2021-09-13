import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from 'services/api';
import { history } from 'services/history';

import { StoreState } from 'store/store.type';
import { User } from 'store/modules/user/User.types';
import { addUserRequest } from 'store/modules/user/User.actions';

import Row from 'components/Grid/Row';
import Col from 'components/Grid/Col';

import Wrapper from 'components/_noauth/Wrapper';
import Header from 'components/_noauth/Header';
import Content from 'components/_noauth/Content';
import Form from 'components/_noauth/Form';
import SideNavigation from 'components/_noauth/SideNavigation';

import Input from 'components/Input';
import RegisterButton from 'components/Register/Button';

import arrowRightIcon from 'assets/icons/arrowRight.svg';

import * as S from './styles';

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

  const onSubmit = async (data: RegisterFormInput) => {
    dispatch(addUserRequest(data));
  };

  useEffect(() => {
    // if (user) {
    //   setError(user.field, {
    //     type: 'manual',
    //     message: err.response.data.message
    //   });
    // }

    console.log(typeof user.field);
  }, [user]);

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
                    text="Typing your full name"
                    error={errors.name?.message}
                  />
                  <Input
                    register={register}
                    inputName="username"
                    type="text"
                    text="Username"
                    error={errors.username?.message}
                  />
                  <Input
                    register={register}
                    inputName="email"
                    type="text"
                    text="Email"
                    error={errors.email?.message}
                  />
                  <Input
                    register={register}
                    inputName="password"
                    type="password"
                    text="Password"
                    error={errors.password?.message}
                  />
                  <Input
                    inputName="confirmPassword"
                    type="password"
                    text="Repeat Password"
                    register={register}
                    error={errors.confirmPassword?.message}
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
