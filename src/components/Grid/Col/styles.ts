import styled, { css } from 'styled-components';

type ContainerProps = {
  column?: number | string;
  xs?: number | string | 'auto';
  sm?: number | string | 'auto';
  md?: number | string | 'auto';
  lg?: number | string | 'auto';
  align?:
    | 'auto'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'stretch';
  gap?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  align-self: ${props => props.align && props.align};

  @media screen and (min-width: 1024px) {
    flex: ${props => props.column};
    position: static;
  }

  ${props =>
    props.xs &&
    css`
      @media screen and (max-width: 575px) {
        width: calc(
          ${props.xs ? (Number(props.xs) / 12) * 100 : '100'}% - 20px
        );
      }
    `}

  ${props =>
    props.sm &&
    css`
      @media screen and (min-width: 575px) {
        width: calc(
          ${props.sm ? (Number(props.sm) / 12) * 100 : '100'}% - 20px
        );
      }
    `}

  ${props =>
    props.md &&
    css`
      @media screen and (min-width: 1024px) {
        width: calc(
          ${props.md ? (Number(props.md) / 12) * 100 : '100'}% - 20px
        );
      }
    `}

  ${props =>
    props.lg &&
    css`
      @media screen and (min-width: 1440px) {
        width: calc(
          ${props.lg ? (Number(props.lg) / 12) * 100 : '100'}% - 20px
        );
      }
    `}
`;
