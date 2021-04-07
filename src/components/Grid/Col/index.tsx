import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  column?: number | string;
};

const Col = ({ children, column }: Props) => {
  return <Container column={column}>{children}</Container>;
};

export default Col;
