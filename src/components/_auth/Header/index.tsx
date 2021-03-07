import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Header;
