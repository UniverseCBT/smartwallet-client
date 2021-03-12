import styled from 'styled-components';

export const Background = styled.div`
  background: #f3f4f8;
  position: relative;
  left: 0;
  height: 105vh;
  width: 100%;
  padding: 40px 10px 20px;
  border-radius: 15px 15px 0 0;
  z-index: 100;

  @media screen and (min-width: 1024px) {
    border-radius: 0;
    overflow-y: auto;
    height: 100vh;
  }
`;

export const Container = styled.div`
  position: sticky;
  top: 40px;

  @media screen and (min-width: 1024px) {
    position: relative;
    top: 0;
    border-radius: 0;
    max-width: 650px;
    width: 100%;
    padding: 0 40px;
    margin: 0 auto;
  }
`;
