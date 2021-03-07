import styled from 'styled-components';

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
          background: #f3f4f8;
          color: #333;
          font-weight: normal;
          margin-right: 0;
        }
      }

      strong {
        background: #09c4a7;
        color: #fff;
        padding: 5px 11px;
        border-radius: 1000px;
        margin-right: 5px;
        transition: all 0.2s;
      }
    }
  }

  p {
    color: #4c616b;
    display: none;

    @media screen and (min-width: 468px) {
      display: block;
    }

    > a {
      color: #2dcda3;
      font-weight: bold;
    }
  }
`;
