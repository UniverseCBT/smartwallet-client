import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  column?: number | string;
  mobileMargin?: boolean;
  align?:
    | 'auto'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'stretch';
};

const Col = ({ children, column, mobileMargin, align }: Props) => {
  return (
    <Container column={column} align={align} mobileMargin={mobileMargin}>
      {children}
    </Container>
  );
};

export default Col;
