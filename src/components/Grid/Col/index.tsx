import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  column?: number | string;
  xs?: number | string | 'auto';
  sm?: number | string | 'auto';
  md?: number | string | 'auto';
  lg?: number | string | 'auto';
  gap?: boolean;
  align?:
    | 'auto'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'stretch';
};

const Col = ({ children, column, xs, sm, md, lg, gap, align }: Props) => {
  return (
    <Container
      column={column}
      align={align}
      gap={gap}
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
