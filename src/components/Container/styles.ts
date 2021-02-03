import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media screen and (min-width: 1024px) {
    display: block;
    padding: 0;
  }
`;
