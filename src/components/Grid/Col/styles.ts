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

  ${props =>
    props.xs &&
    css`
      @media screen and (max-width: 575px) {
        width: ${props.xs ? (Number(props.xs) / 12) * 100 : '100'}%;
      }
    `}

  ${props =>
    props.md &&
    css`
      @media screen and (min-width: 1024px) {
        width: ${props.md ? (Number(props.md) / 12) * 100 : '100'}%;
      }
    `}

  @media screen and (max-width: 1023px) {
    & + div {
      margin-top: ${props => (props.gap ? '20px' : '0')};
    }
  }

  @media screen and (min-width: 1024px) {
    flex: ${props => props.column};
    position: static;

    & + div {
      margin-left: ${props => (props.gap ? '20px' : '0')};
    }
  }
`;
