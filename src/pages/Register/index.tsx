import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../services/api';

import * as S from './styles';

import Wrapper from '../../components/_noauth/Wrapper';
import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import Header from '../../components/_noauth/Header';
import Content from '../../components/_noauth/Content';
import Form from '../../components/_noauth/Form';
import SideNavigation from '../../components/_noauth/SideNavigation';

import Input from '../../components/Input';
import RegisterButton from '../../components/Register/Button';

import arrowRightIcon from '../../assets/icons/arrowRight.svg';

type RegisterFormInput = {
  name: string;
  username: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormInput>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: RegisterFormInput) => {
    try {
      const response = await api.post('/users', data);

      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

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
