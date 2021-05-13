import styled from 'styled-components';

type ContainerProps = {
  auth?: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: relative;

  @media screen and (min-width: ${props => (props.auth ? '575px' : '1024px')}) {
    display: flex;
    width: 100%;
  }
`;
