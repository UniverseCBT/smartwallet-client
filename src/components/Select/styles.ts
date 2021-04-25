import styled, { css } from 'styled-components';

type SelectProps = {
  type?: string;
};

export const Container = styled.div<SelectProps>`
  user-select: none;

  ${props =>
    props.type === 'simple'
      ? css`
          position: relative;
        `
      : css`
          position: initial;
        `}
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

export const Options = styled.ul<SelectProps>`
  ${props =>
    props.type === 'simple' &&
    css`
      position: absolute;
      top: 60px;
      background: #fff;
      border-radius: 4px;
      width: 100%;
      max-height: 250px;
      overflow-y: auto;
      z-index: 1000;
      padding: 5px;

      li button {
        display: block;
        width: 100%;
        background: none;
        border: none;
        padding: 10px;
        text-align: left;
        color: #1ae5bd;
        font-size: 0.8rem;
        font-weight: 500;
        transition: all 0.2s;

        &.active,
        &:hover {
          background: #1ae5bd;
          color: #fff;
          border-radius: 4px;
        }
      }

      li + li button {
        margin-top: 5px;
      }
    `}

  ${props =>
    props.type === 'complex' &&
    css`
      position: absolute;
      top: 60px;
      left: 0;
      display: block;
      width: 100%;
      background: #fff;
      border-radius: 8px;
      padding: 10px 5px;
      list-style: none;
      z-index: 1000;
      overflow: hidden;

      @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        max-height: 90px;
        padding: 0;
      }

      li {
        @media screen and (min-width: 1024px) {
          flex: 1;
        }

        button {
          display: block;
          width: 100%;
          border: none;
          background: none;
          text-align: left;
          transition: all 0.2s;
          padding: 10px;

          @media screen and (min-width: 1024px) {
            height: 100vh;
          }

          &.active,
          &:hover {
            background: #1ae5bd;
            border-radius: 8px;

            p {
              color: #fff;
            }
          }
        }
      }

      li + li button {
        margin-top: 10px;

        @media screen and (min-width: 1024px) {
          margin-top: 0;
        }
      }
    `}
`;

export const OptionsMain = styled.div`
  display: flex;
  align-items: center;

  > div + div {
    flex: 5;
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
  }
`;
