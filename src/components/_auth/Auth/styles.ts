import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;

  @media screen and (min-width: 575px) {
    height: 100vh;
    overflow-y: hidden;
    margin-top: 0;
  }
`;

export const Main = styled.div`
  padding: 20px 40px;
  position: relative;

  @media screen and (min-width: 575px) {
    height: 100vh;
    overflow-y: hidden;
  }
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
  margin: 0 0 20px;
  overflow: hidden;
`;
