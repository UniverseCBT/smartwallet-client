import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
}

const Row = ({ children }: Props) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Row;
