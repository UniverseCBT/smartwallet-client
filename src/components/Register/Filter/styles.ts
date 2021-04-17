import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 60px;

  h5 {
    color: #646464;
    font-size: 1.5rem;
  }
`;

export const Header = styled.div`
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

export const Label = styled.div`
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

    .size {
      position: absolute;
      bottom: -15px;
      right: -10px;
      background: #fff;
      color: #646464;
      padding: 5px;
      width: 30px;
      height: 30px;
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1000px;
      font-size: 0.8rem;
    }
  }
`;
