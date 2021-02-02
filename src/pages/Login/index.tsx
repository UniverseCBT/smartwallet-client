import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import cardUserIcon from '../../assets/icons/card.svg';

const Login = () => {
  return (
    <>
      <Input icon={cardUserIcon} text="Username" />
      <Input icon={cardUserIcon} text="Password" />
      <Button text="seila" />
    </>
  );
};

export default Login;
