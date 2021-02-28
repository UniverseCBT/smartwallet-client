import React from 'react';

import { Background, Container } from './styles';

type ContentProps = {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <Background>
      <Container>
        {children}
      </Container>
    </Background>
  );
};

export default Content;
