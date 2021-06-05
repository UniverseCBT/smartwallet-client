import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  auth?: boolean;
  wrap?: boolean;
  noFlex?: boolean;
  xs?: boolean;
  sm?: boolean;
};

const Row = ({ children, auth, wrap, noFlex, xs, sm }: Props) => {
  return (
    <Container auth={auth} flexWrap={wrap} noFlex={noFlex} xs={xs} sm={sm}>
      {children}
    </Container>
  );
};

export default Row;
