import React from 'react';

import { Container } from './styles';

type FormProps = {
  children: React.ReactNode;
};

const Form = ({ children }: FormProps) => {
  return <Container>{children}</Container>;
};

export default Form;
