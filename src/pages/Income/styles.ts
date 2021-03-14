import styled from 'styled-components';

export const PaycheckForm = styled.div`
  > div + div {
    margin-top: 20px;
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
      color: #2dcda3;
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
