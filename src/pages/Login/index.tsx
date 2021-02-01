import React from 'react';

import Input from '../../components/Input';

import cardUserIcon from '../../assets/icons/card.svg';

const Login = () => {
  return (
    <>
      <Input icon={cardUserIcon} text="Username" />
      <Input icon={cardUserIcon} text="Password" />
    </>
  );
};

export default Login;
