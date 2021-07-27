import React from 'react';

import { Container } from './styles';

type ButtonProps = {
  text?: string;
};

const Button = ({ text }: ButtonProps) => {
  return <Container>{text}</Container>;
};

export default Button;
