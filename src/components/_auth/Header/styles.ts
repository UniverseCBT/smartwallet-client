import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  width: 100%;
  margin-bottom: 30px;

  .back-login {
    text-align: left;

    a {
      color: #333;
      font-size: 18px;
      position: relative;
      display: flex;
      align-items: center;

      &:hover {
        strong {
          background: #F3F4F8;
          color: #333;
          font-weight: normal;
          margin-right: 0;
        }
      }

      strong {
        background: #09C4A7;
        color: #fff;
        padding: 5px 11px;
        border-radius: 1000px;
        margin-right: 5px;
        transition: all .2s;
      }
    }
  }

  p {
    color: #4C616B;
    display: none;

    @media screen and (min-width: 468px) {
      display: unset;
    }

    > a {
      color: #2DCDA3;
      font-weight: bold;
    }
  }
`;
