import styled from 'styled-components';

export const ExpenseForm = styled.div`
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

  > div {
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

export const ExpenseList = styled.div`
  position: relative;
`;

export const ExpensesCreated = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  & + div {
    border-top: 1px solid #ececec;
  }
`;

export const Description = styled.div`
  h6 {
    color: #878787;
    font-size: 1.2rem;
  }

  span {
    display: block;
    font-size: 0.9rem;
    color: #c9c9c9;
  }
`;

export const Utils = styled.div`
  display: flex;
  align-items: center;
`;

export const Features = styled.div`
  margin-right: 10px;

  strong,
  span {
    display: block;
    text-align: right;
  }

  strong {
    font-size: 1.4rem;
    color: #878787;
  }

  span {
    display: block;
    font-size: 0.9rem;
    color: #c9c9c9;
  }
`;

export const Actions = styled.div`
  margin-left: 10px;

  > button {
    background: none;
    border: none;
    border-radius: 1000px;

    & + button {
      margin-left: 10px;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ExpenseFooter = styled.div`
  margin-top: 60px;

  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .money {
    padding-top: 10px;
    border-top: 1px solid #ececec;
    margin: 20px 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    h4 {
      font-size: 0.8rem;
      color: #c9c9c9;
      font-weight: normal;
    }

    span {
      font-size: 1.6rem;
      color: #878787;
      font-weight: bold;
    }
  }
`;
