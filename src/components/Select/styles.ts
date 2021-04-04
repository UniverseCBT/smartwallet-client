import styled from 'styled-components';

export const Container = styled.div`
  user-select: none;
  position: relative;
`;

export const Label = styled.div`
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

export const Options = styled.ul`
  position: absolute;
  top: 60px;
  background: #fff;
  border-radius: 4px;
  width: 100%;
  max-height: 250px;
  z-index: 1000;
  overflow-y: auto;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.07);

  li {
    .active {
      background: #174c64;
      color: #f3f4f8;

      &:hover {
        color: #f3f4f8;
      }
    }

    button {
      list-style: none;
      padding: 15px 10px;
      cursor: pointer;
      color: #c9c9c9;
      background: transparent;
      border: none;
      width: 100%;
      text-align: left;
      font-size: 0.9rem;
      font-weight: bold;

      &:hover {
        color: #174c64;
      }
    }
  }
`;
