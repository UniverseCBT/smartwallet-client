import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  column?: number | string;
  xs?: number | string | 'auto';
  sm?: number | string | 'auto';
  md?: number | string | 'auto';
  lg?: number | string | 'auto';
  align?:
    | 'auto'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'stretch';
};

const Col = ({ children, className, column, xs, sm, md, lg, align }: Props) => {
  return (
    <Container
      className={className}
      column={column}
      align={align}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
    >
      {children}
    </Container>
  );
};

export default Col;
