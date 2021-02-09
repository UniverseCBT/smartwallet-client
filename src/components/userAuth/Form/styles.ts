import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #F3F4F8;
  padding: 40px 10px 20px;
  border-radius: 15px 15px 0 0;

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
