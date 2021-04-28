import styled from 'styled-components';

export const PaycheckForm = styled.div`
  background-color: #f3f4f8;
  z-index: 1000;
  position: sticky;
  top: 0;
  padding: 20px 0 15px;

  @media screen and (min-width: 1024px) {
    top: -40px;
    padding: 20px 0;
  }

  > div + div {
    margin-top: 20px;
  }

  div {
    > div + div {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      > div + div {
        margin-top: 0;
      }
    }
  }

  .right-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 1024px) {
      justify-content: center;

      .total {
        display: none;
      }
    }

    .total {
      span {
        color: #c9c9c9;
        font-weight: bold;
        font-size: 0.8rem;
      }

      h4 {
        font-size: 1.6rem;
        color: #646464;
      }
    }

    button {
      border: none;
      background: #2dcda3;
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      padding: 10px 15px;
      border-radius: 1000px;
      width: 40px;
      height: 40px;

      img {
        width: 10px;
      }
    }
  }
`;

export const ButtonForm = styled.button`
  border: none;
  background: #1ae5bd;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px 15px;
  border-radius: 1000px;
  width: 40px;
  height: 40px;
`;
