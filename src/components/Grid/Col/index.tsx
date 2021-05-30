import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  column?: number | string;
  gap?: boolean;
  align?:
    | 'auto'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'stretch';
};

const Col = ({ children, column, gap, align }: Props) => {
  return (
    <Container column={column} align={align} gap={gap}>
      {children}
    </Container>
  );
};

export default Col;
