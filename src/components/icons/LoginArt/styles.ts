import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    position: absolute;
    bottom: 0;
  }
`;
