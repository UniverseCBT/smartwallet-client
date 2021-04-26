import styled, { css } from 'styled-components';

type ButtonProps = {
  theme: string;
  themeExist: boolean;
};

export const Container = styled.button<ButtonProps>`
  & + button {
    margin-left: 20px;
  }

  ${props =>
    (!props.themeExist || props.theme === 'primary') &&
    css`
      box-shadow: rgb(26 229 189) 0px 4px 14px 0px;
      background: #1ae5bd;
      color: #fff;
      border: none;
      padding: 10px 10px 10px 25px;
      font-size: 1rem;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: padding 0.2s;
    `}

  ${props =>
    props.theme === 'back' &&
    css`
      border: none;
      background: none;
      padding: 10px 10px 10px 25px;
      color: #1ae5bd;
      font-size: 1rem;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: padding 0.2s;

      img {
        margin: 0 15px;
        width: 10px;
      }
    `}

  img {
    margin: 0 15px;
    width: 10px;
  }
`;
