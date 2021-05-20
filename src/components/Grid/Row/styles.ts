import styled from 'styled-components';

type ContainerProps = {
  auth?: boolean;
};

export const Container = styled.div<ContainerProps>`
  @media screen and (min-width: 1024px) {
    position: relative;
    display: flex;
    width: 100%;
  }
`;
