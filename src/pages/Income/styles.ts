import styled from 'styled-components';

export const PaycheckForm = styled.div`
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

  label {
    display: block;
    position: relative;
    background: #fff;
    padding: 8px 2px 8px 8px;
    cursor: text;
    width: 100%;
    border-radius: 8px;

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
    }
  }

  .right-button {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    button {
      border: none;
      background: #2dcda3;
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      padding: 10px 15px;
      border-radius: 8px;
    }
  }
`;

export const PaycheckList = styled.div`
  h2 {
    color: #646464;
  }
`;

export const PaycheckItems = styled.div`
  margin-top: 10px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }
`;

export const Image = styled.div`
  background: #01aa90;
  padding: 5px;
  border-radius: 1000px;
`;

export const Utils = styled.div``;

export const Money = styled.div``;
