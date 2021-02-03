import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  & + div {
    margin-top: 10px;
  }

  label {
    display: flex;
    align-items: center;
    cursor: text;
    background: #fff;
    border-radius: 4px;
    padding: 10px 5px 10px 20px;
    height: 60px;

    div {
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;

      &::after {
        content: "";
        position: relative;
        left: 0;
        top: 0;
        display: inline-block;
        width: 2px;
        height: 100%;
        background: #333;
        margin: 0 5px;
      }

      img {
        width: 40px;
        height: 40px;
      }
    }


    input {
      border: none;
      position: relative;
      margin-left: 20px;
      font-size: 1.1em;
      color: #C9C9C9;
      font-weight: 300;
      width: 100%;

      &::placeholder {
        font-size: 0.9em;
        color: #C9C9C9;
        font-weight: 300;
      }
    }
  }
`;
