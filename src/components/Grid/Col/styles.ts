import styled from 'styled-components';

type ContainerProps = {
  column?: number | string;
  align?:
    | 'auto'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'stretch';
  mobileMargin?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  align-self: ${props => props.align && props.align};

  @media screen and (max-width: 1023px) {
    & + div {
      margin-top: ${props => (props.mobileMargin ? '20px' : '0')};
    }
  }

  @media screen and (min-width: 1024px) {
    flex: ${props => props.column};
    position: static;

    & + div {
      margin-left: 10px;
    }
  }
`;
