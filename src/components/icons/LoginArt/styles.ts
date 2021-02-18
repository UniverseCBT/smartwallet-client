import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: translateY(500px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    position: absolute;
    bottom: 0;
  }

  .teste-1 {
    .test {
      animation-name: ${rotate};
      animation-duration: 3s;
      animation-fill-mode: forwards;
    }

    .teste2 {
      animation-name: ${rotate};
      animation-duration: 3s;
      animation-fill-mode: forwards;
      animation-delay: 4s;
      transform: translateY(500px);
    }
  }
`;
