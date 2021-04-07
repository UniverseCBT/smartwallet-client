import styled from 'styled-components';

type ContainerProps = {
  column?: number | string;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;

  @media screen and (min-width: 1024px) {
    flex: ${props => props.column};
    position: static;

    & + div {
      margin-left: 10px;
    }
  }
`;
