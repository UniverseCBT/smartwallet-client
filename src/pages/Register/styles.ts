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
  }
`;
