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

export const ExpenseSelect = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 50px;
  background: #fff;
  border-radius: 8px;
`;

export const LabelValue = styled.div`
  display: block;
  position: relative;
  padding: 8px 0;
  width: 100%;
  height: 100%;
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
    cursor: default;
  }
`;

export const LabelArrow = styled.div`
  height: 100%;
  width: 20px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 0 !important;

  &::before {
    content: '';
    background: #c9c9c9;
    display: block;
    position: relative;
    padding: 10px 1px;
    right: 10px;
  }

  img {
    height: 15px;
    width: 15px;
  }
`;

export const ExpenseOptions = styled.ul`
  position: absolute;
  background: #fff;
  width: 100%;
  top: 70px;
  left: 0;
  list-style: none;
  border-radius: 8px;
  z-index: 1000;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }

  li {
    button {
      display: block;
      width: 100%;
      height: 100%;
      background: none;
      border: none;
      text-align: left;
      padding: 10px;
      transition: all 0.2s;

      &:hover {
        background: #1ae5bd;
        border-radius: 8px;

        p {
          color: #fff;
        }
      }
    }

    @media screen and (min-width: 1024px) {
      flex: 1;
    }
  }
`;

export const OptionsMain = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1024px) {
    > div + div {
      flex: 5;
    }
  }
`;

export const OptionImage = styled.div`
  background: #f3f4f8;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 35px;
  }
`;

export const OptionsContent = styled.div`
  margin-left: 20px;

  @media screen and (min-width: 1024px) {
    margin-left: 10px;
  }

  h4 {
    color: #174c64;
    font-size: 1rem;

    @media screen and (min-width: 1024px) {
      font-size: 0.9rem;
    }
  }

  p {
    color: #cad3e0;
    font-size: 0.8rem;
    margin-top: 5px;

    @media screen and (min-width: 1024px) {
    font-size: 0.7rem;

  }
`;
