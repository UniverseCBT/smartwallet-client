import styled, { keyframes } from 'styled-components';

const upAnimation = keyframes`
  0% {
    transform: translateY(500px);
  }

  100% {
    transform: translateY(0);
  }
`;

const treeAnimationRight = keyframes`
  0% {
    transform: translate3D(-5px, 5px, 0);
    opacity: 0;
  }

  100% {
    transform: translate3D(0, 0, 0);
    opacity: 1;
  }
`;

const treeAnimationLeft = keyframes`
  0% {
    transform: translate3D(15px, 15px, 0);
    opacity: 0;
  }

  100% {
    transform: translate3D(0, 0, 0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    position: absolute;
    bottom: -5px;
  }

  .mainArrowUp {
    animation-name: ${upAnimation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }

  .handUp {
    animation-name: ${upAnimation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-delay: 3s;
    transform: translateY(500px);
  }

  .firstTree {
    animation-name: ${treeAnimationRight};
    animation-duration: 1s;
    animation-fill-mode: backwards;
    animation-delay: 4s;
    animation-timing-function: slidein;
  }

  .secondTree {
    animation-name: ${treeAnimationRight};
    animation-duration: 1s;
    animation-fill-mode: backwards;
    animation-delay: 5s;
    animation-timing-function: slidein;
  }

  .thirdTree {
    animation-name: ${treeAnimationLeft};
    animation-duration: 1s;
    animation-fill-mode: backwards;
    animation-delay: 6s;
    animation-timing-function: slidein;
  }

  .miniArrowUp {
    animation-name: ${upAnimation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    transform: translateY(500px);
  }

  .one {
    animation-delay: 5s;
  }

  .two {
    animation-delay: 6s;
  }

  .three {
    animation-delay: 7s;
  }

  .four {
    animation-delay: 8s;
  }

  .five {
    animation-delay: 9s;
  }

  .six {
    animation-delay: 10s;
  }

  .seven {
    animation-delay: 11s;
  }
`;
