import React from 'react';

import { Container } from '../../components/Container/styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import cardUserIcon from '../../assets/icons/card.svg';

const Login = () => {
  return (
    <Container>
      <div>
        <Input icon={cardUserIcon} text="Username" />
        <Input icon={cardUserIcon} text="Password" />
        <Button text="seila" />
      </div>
    </Container>
  );
};

export default Login;
