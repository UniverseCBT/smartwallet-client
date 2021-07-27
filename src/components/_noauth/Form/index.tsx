import React from 'react';

import { Container } from './styles';

type FormProps = {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

const Form = ({ children, onSubmit }: FormProps) => {
  return <Container onSubmit={onSubmit}>{children}</Container>;
};

export default Form;
