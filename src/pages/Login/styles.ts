import styled from 'styled-components';

export const Container = styled.div`
  background: #2DCDA3;

  .bg-login {
    position: relative;
    z-index: 10;
    padding: 0 20px;
    height: 40vh;

    h1 {
      padding: 40px 0 10px;
      color: #fff;
    }

    p {
      color: #F3F4F8;
      font-weight: bold;
    }

    img {
      width: 230px;
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      z-index: -1;

      @media screen and (min-width: 420px) {
        width: 250px;
      }
    }
  }
`;
