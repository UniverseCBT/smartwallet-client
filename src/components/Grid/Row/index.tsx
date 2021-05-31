import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  auth?: boolean;
  wrap?: 'wrap' | 'nowrap' | boolean;
  noFlex?: boolean;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
};

const Row = ({ children, auth, wrap, noFlex, xs, sm, md, lg }: Props) => {
  return (
    <Container
      auth={auth}
      wrap={wrap}
      noFlex={noFlex}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
    >
      {children}
    </Container>
  );
};

export default Row;
