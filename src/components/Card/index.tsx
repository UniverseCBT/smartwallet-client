import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactChildren;
};

const Card = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Card;
