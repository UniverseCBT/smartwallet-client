import styled, { css } from 'styled-components';

import { InputProps } from '.';

export const Container = styled.div`
  user-select: none;
  position: relative;
  width: 100%;

  & + div {
    margin-top: 20px;
  }

  p {
    color: var(--danger);
    margin-top: 0.5rem;
  }
`;

export const Label = styled.label<Pick<InputProps, 'error'>>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
  width: 100%;
  height: 50px;
  background: transparent;
  border-radius: 4px;
  cursor: text;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--title);

  ${({ error }) => css`
    border: ${error && '1px solid var(--danger)'};
  `}
`;

export const LabelValue = styled.div`
  display: block;
  position: relative;
  padding: 8px 0;
  width: 100%;
  height: 100%;

  span {
    display: block;
    font-weight: bold;
    font-size: 10px;
    color: var(--black);
  }

  input {
    display: block;
    width: 100%;
    border: none;
    font-size: 16px;
    margin-top: 5px;
    padding-right: 55px;
    color: var(--title);
    background: transparent;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-background-clip: text;
      -webkit-text-fill-color: #c9c9c9;
    }

    &::placeholder {
      color: var(--title);
      font-size: 14px;
    }
  }
`;

export const VisiblePassword = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  border: none;
  background: none;
  transform: translate3d(0, -50%, 0);
  background: transparent;
  width: 50px;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate3d(0, -50%, 0);
    background: var(--title);
    width: 1px;
    height: 25px;
  }

  img {
    height: 20px;
    width: 20px;
  }
`;
