import styled from "styled-components";

export const Container = styled.form`
  position: sticky;
  top: 40px;

  @media screen and (min-width: 1024px) {
    position: relative;
    top: 0;
    margin-top: 140px;
  }

  .description {
    display: none;

    @media screen and (min-width: 1024px) {
      margin: 40px 0;
      display: block;

      h1, p {
        text-align: left;
      }

      h1 {
        color: #646464;
        font-size: 30px;
      }

      p {
        margin-top: 10px;
        font-size: 20px;
        color: #B5B5B5;
      }
    }
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
