import React from 'react';

import { Container } from './styles';

export type Props = {
  type: string;
  text: string;
  icon?: {
    url: string;
    altText?: string;
  };
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ type, text, icon, onClick }: Props) => {
  return (
    <Container onClick={onClick} type="button">
      {icon && <img src={icon.url} alt={icon.altText} />}
      {text}
    </Container>
  );
};

export default Button;
