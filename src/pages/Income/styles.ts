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

export const PaycheckList = styled.div`
  padding-bottom: 60px;

  h2 {
    color: #646464;
    font-size: 1.2rem;
    margin: 20px 5px;
  }
`;

export const PaycheckItems = styled.div`
  margin-top: 10px;
  height: 100%;

  @media screen and (min-width: 1024px) {
    height: 100%;
    overflow-y: auto;
  }
`;

type PaycheckFooterProps = {
  showActionButtons: boolean;
};

export const PaycheckFooter = styled.div<PaycheckFooterProps>`
  position: fixed;
  bottom: ${props => (props.showActionButtons ? '0' : '-100%')};
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 2000;
  padding: 20px 10px;
  transition: all 0.8s;

  @media screen and (min-width: 1024px) {
    background-color: transparent;
    position: relative;
    bottom: 0;
    left: 0;
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .money {
    display: none;

    @media screen and (min-width: 1024px) {
      display: initial;
      span {
        color: #c9c9c9;
        font-weight: bold;
        font-size: 0.8rem;
      }

      h4 {
        font-size: 2rem;
        color: #646464;
      }
    }
  }

  .actions {
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 1024px) {
      justify-content: flex-end;
    }

    button:first-child {
      background-color: #c9c9c9;

      @media screen and (min-width: 1024px) {
        margin-right: 10px;
      }
    }

    button {
      border: none;
      padding: 10px 35px;
      font-weight: bold;
      color: #fff;
      background-color: #06ba9e;
      font-size: 1rem;
      border-radius: 4px;

      @media screen and (min-width: 1024px) {
        padding: 10px 50px;
      }
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;

  & + div {
    margin-top: 10px;
  }
`;

export const Image = styled.div`
  padding: 5px;
`;

export const Utils = styled.div`
  flex: 3;
  margin-left: 10px;

  strong {
    display: block;
    font-size: 1.2rem;
    color: #646464;
  }

  span {
    color: #c9c9c9;
    font-size: 0.9rem;
  }
`;

export const Money = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    color: #c9c9c9;
    font-weight: bold;
    font-size: 0.8rem;
  }

  strong {
    font-size: 1.4rem;
    color: #646464;
    margin-top: 5px;
  }
`;
