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

export const ExpenseLabel = styled.div`
  display: block;
  position: relative;
  background: #fff;
  padding: 8px 2px 8px 8px;
  cursor: text;
  width: 100%;
  border-radius: 8px;
  user-select: none;

  span {
    display: block;
    color: #646464;
    font-weight: bold;
    font-size: 10px;
  }

  input {
    border: none;
    font-size: 16px;
    margin-top: 5px;
    font-weight: bold;
    color: #c9c9c9;

    &::placeholder {
      color: #c9c9c9;
    }
  }
`;

export const ExpenseList = styled.div`
  position: relative;
`;

export const ListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  h5 {
    color: #646464;
    font-size: 1.5rem;
  }
`;

export const HeaderFilter = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }

  .filter-item-mobile button {
    border: 2px solid #1ae5bd;
    border-radius: 4px;
    background: none;
    padding: 6px 15px;
    display: flex;
    align-items: center;

    @media screen and (min-width: 1024px) {
      display: none;
    }

    img {
      width: 20px;
    }

    span {
      color: #1ae5bd;
      font-size: 1rem;
      font-weight: bold;
      display: flex;
      align-items: center;

      &:before {
        content: '';
        display: block;
        position: relative;
        right: 0;
        height: 20px;
        width: 2px;
        background: #1ae5bd;
        margin: 0 12px 0 8px;
      }
    }
  }
`;

export const LabelFilter = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: initial;
    position: relative;

    > label {
      background: #fff;
      border-radius: 4px;
      padding: 10px 12px;
      height: 40px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;

      span,
      img {
        z-index: 10;
        position: relative;
      }

      span {
        color: #1ae5bd;
        padding: 0 20px;
      }

      img {
        width: 20px;
      }

      input[type='radio'] {
        all: unset;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;

        &:checked {
          background: #1ae5bd;
        }
      }

      input[type='radio']:checked + span {
        color: #fff;
      }
    }

    & + div label {
      margin-left: 10px;
    }
  }
`;

export const ExpensesCreated = styled.div``;

export const Description = styled.div``;

export const Utils = styled.div``;

export const Action = styled.div``;
