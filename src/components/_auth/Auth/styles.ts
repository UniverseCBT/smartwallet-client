import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 1024px) {
    height: 100vh;
    overflow-y: hidden;
    margin-top: 0;
  }
`;

export const Container = styled.div`
  padding: 20px 20px 20px 75px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    padding: 0;
    height: 100vh;
    overflow-y: hidden;
    margin-top: 0;
  }
`;

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    height: 100vh;
    overflow-y: hidden;
    margin-left: 0;
    padding: 20px 40px;
  }
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;
