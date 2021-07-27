import React from 'react';

import * as S from './styles';

export type Props = {
  theme?: string;
  text: string;
  type?: 'button' | 'submit';
  icon?: {
    url: string;
    altText?: string;
    side?: string;
  };
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button = ({
  theme,
  text,
  type = 'button',
  icon,
  onClick,
  disabled
}: Props) => {
  return (
    <S.Container
      onClick={onClick}
      type={type && type}
      theme={theme}
      themeExist={!!theme}
      icon={!!icon}
      disabled={disabled}
    >
      {icon && (!icon.side || icon.side === 'left') && (
        <img src={icon.url} alt={icon.altText} />
      )}
      {text}
      {icon && icon.side === 'right' && (
        <img src={icon.url} alt={icon.altText} />
      )}
    </S.Container>
  );
};

export default Button;
