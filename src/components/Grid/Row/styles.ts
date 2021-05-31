import styled, { css } from 'styled-components';

type ContainerProps = {
  auth?: boolean;
  wrap?: 'wrap' | 'nowrap' | boolean;
  noFlex?: boolean;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  flex-wrap: ${props => (props.wrap === 'wrap' ? 'wrap' : 'nowrap')};

  ${props =>
    props.xs &&
    css`
      @media screen and (max-width: 574px) {
        display: flex;
      }
    `}

  ${props =>
    props.sm &&
    css`
      @media screen and (min-width: 575px) {
        display: flex;
      }
    `}

  @media screen and (min-width: 1024px) {
    display: ${props => (props.noFlex ? 'initial' : 'flex')};
  }

  /* ${props =>
    props.md &&
    css`
      @media screen and (min-width: 1024px) {
        display: flex;
      }
    `}

  ${props =>
    props.lg
      ? css`
          @media screen and (min-width: 1440px) {
            display: ${props.lg ? 'flex' : 'initial'};
          }
        `
      : 'flex'} */
`;
