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
      position: relative;
      height: 100%;
      width: 35px;
      display: flex;
      align-items: center;
      margin-right: 8px;

      &::after {
        content: "";
        position: relative;
        left: 0;
        top: 0;
        display: block;
        width: 2px;
        height: 100%;
        border-right: 1px solid #EEEEEE;
        margin-left: 15px;
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
