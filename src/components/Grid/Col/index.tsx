import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  column?: number | string;
  align?:
    | 'auto'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'stretch';
};

const Col = ({ children, column, align }: Props) => {
  return (
    <Container column={column} align={align}>
      {children}
    </Container>
  );
};

export default Col;
