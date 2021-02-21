import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(172deg, #09C4A7 0%, #01AA90 100%);

  .bg-login {
    position: relative;
    z-index: 10;
    padding: 0 20px;
    height: 40vh;

    @media screen and (min-width: 768px) {
      height: 100vh;
    }

    h1 {
      padding: 40px 0 10px;
      color: #fff;
    }

    p {
      color: #F3F4F8;
      font-weight: bold;
    }

    @media screen and (min-width: 1024px) {
      h1, p {
        display: none;
      }
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

      @media screen and (min-width: 1024px) {
        bottom: 0;
        top: unset;
        width: 450px;
      }
    }
  }
`;
