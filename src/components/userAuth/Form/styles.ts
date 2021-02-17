import styled from "styled-components";

export const Container = styled.form`
  position: sticky;
  top: 40px;

  @media screen and (min-width: 1024px) {
    position: relative;
    top: 0;
    margin-top: 120px;
  }

  > div {
    text-align: right;
    height: auto;
    margin: 20px 0;

    > a {
      display: inline-block;
      color: #A2A2A2;
      text-align: right;
    }
  }
`;
