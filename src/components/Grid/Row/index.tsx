import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  auth?: boolean;
};

const Row = ({ children, auth }: Props) => {
  return <Container auth={auth}>{children}</Container>;
};

export default Row;
