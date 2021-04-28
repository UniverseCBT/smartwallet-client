import React from 'react';

import { Background, Container } from './styles';

type ContentProps = {
  children: React.ReactNode;
};

export type Ref = HTMLDivElement;

const Content = React.forwardRef((props: ContentProps, ref: React.Ref<Ref>) => {
  return (
    <Background ref={ref}>
      <Container>{props.children}</Container>
    </Background>
  );
});

export default Content;
