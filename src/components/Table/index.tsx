import React from 'react';

import { Wrapper, Container } from './styles';

type Props = {
  children?: React.ReactNode;
};

const Table = ({ children }: Props) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Table;
