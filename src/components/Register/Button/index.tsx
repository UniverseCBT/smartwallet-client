import React from 'react';

import { Container } from './styles';

export type Props = {
  theme?: string;
  text: string;
  icon?: {
    url: string;
    altText?: string;
    side?: string;
  };
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ theme, text, icon, onClick }: Props) => {
  return (
    <Container
      onClick={onClick}
      type="button"
      theme={theme}
      themeExist={!!theme}
    >
      {icon && (!icon.side || icon.side === 'left') && (
        <img src={icon.url} alt={icon.altText} />
      )}
      {text}
      {icon && icon.side === 'right' && (
        <img src={icon.url} alt={icon.altText} />
      )}
    </Container>
  );
};

export default Button;
