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
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  align-self: ${props => props.align && props.align};

  @media screen and (min-width: 1024px) {
    flex: ${props => props.column};
    position: static;

    & + div {
      margin-left: 10px;
    }
  }
`;
