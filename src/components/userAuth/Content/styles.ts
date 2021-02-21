import styled from "styled-components";

export const Background = styled.div`
  background: #F3F4F8;
  position: relative;
  left: 0;
  height: 105vh;
  width: 100%;
  padding: 40px 10px 20px;
  border-radius: 15px 15px 0 0;
  z-index: 100;

  @media screen and (min-width: 420px) and (max-width: 767px) {
    padding: 80px 10px 60px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    position: fixed;
    bottom: 0;
    height: auto;
    padding: 40px 10px 20px;
  }

  @media screen and (min-width: 1024px) {
    border-radius: 30px 0 0 0;
    overflow-y: auto;
    height: 100vh;
  }
`;

export const Container = styled.div`
  p {
    display: block;
    text-align: right;
    color: #4C616B;

    > a {
      color: #2DCDA3;
      font-weight: bold;
    }
  }

  @media screen and (min-width: 1024px) {
    position: relative;
    border-radius: 0;
    max-width: 650px;
    width: 100%;
    padding: 0 40px;
    margin: 0 auto;
  }
`;
