import styled, { css } from 'styled-components';

type ContainerProps = {
  auth?: boolean;
  flexWrap?: boolean;
  noFlex?: boolean;
  xs?: boolean;
  sm?: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  flex-wrap: ${props => (props.flexWrap ? 'nowrap' : 'wrap')};
  gap: 20px;

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
      @media screen and (min-width: 575px) and (max-width: 1024px) {
        display: flex;
      }
    `}

  @media screen and (min-width: 1024px) {
    display: ${props => (props.noFlex ? 'initial' : 'inline-flex')};
  }
`;
