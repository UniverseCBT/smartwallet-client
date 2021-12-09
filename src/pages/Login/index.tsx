import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { loginRequest } from 'store/modules/auth/Auth.actions';
import { AuthType } from 'store/modules/auth/Auth.types';
import { StoreState } from 'store/store.type';

import Content from 'components/_noauth/Content';
import Form from 'components/_noauth/Form';
import Header from 'components/_noauth/Header';
import SideNavigation from 'components/_noauth/SideNavigation';
import Wrapper from 'components/_noauth/Wrapper';
import Col from 'components/Grid/Col';
import Row from 'components/Grid/Row';
import LoginArt from 'components/icons/LoginArt';
import Input from 'components/Input';
import Button from 'components/Register/Button';

import * as S from './styles';

type LoginFormInput = {
  usernameOrEmail: string;
  password: string;
};

const schema = yup.object().shape({
  usernameOrEmail: yup.string().required('Name is a required field.'),
  password: yup
    .string()
    .min(6, 'Password mus be at least 6 characteres')
    .required('Password is a required field')
});

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormInput>({
    resolver: yupResolver(schema)
  });

  const auth = useSelector<StoreState, AuthType>(state => state.auth);

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (data: LoginFormInput) => {
      dispatch(loginRequest(data));
    },
    [dispatch]
  );

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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="description">
                <h1>Welcome Back!</h1>
                <p>Let`s sign you in</p>
              </div>
              <div>
                <Input
                  register={register}
                  inputName="usernameOrEmail"
                  type="text"
                  text="Username/Email"
                  error={!!auth.message}
                />
                <Input
                  register={register}
                  inputName="password"
                  type="password"
                  text="Password"
                  error={!!auth.message}
                />
              </div>
              <S.Footer>
                <Link to="/">Forgot your password?</Link>
                <Button text="Sign In" type="submit" />
              </S.Footer>
            </Form>
          </Content>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Login;
