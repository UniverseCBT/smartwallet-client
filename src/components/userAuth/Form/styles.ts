import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  height: 105vh;
  background: #F3F4F8;
  padding: 40px 10px 20px;
  border-radius: 15px 15px 0 0;
  z-index: 100;

  @media screen and (min-width: 420px) {
    padding: 80px 10px 60px;
  }

  > form {
    position: sticky;
    top: 40px;
  }

  div {
    text-align: right;

    > a {
      margin: 20px 0 50px;
      display: inline-block;
      color: #A2A2A2;
      text-align: right;
    }
  }

  p {
    display: block;
    text-align: center;
    color: #4C616B;

    > a {
      color: #2DCDA3;
      font-weight: bold;
    }
  }
`;
