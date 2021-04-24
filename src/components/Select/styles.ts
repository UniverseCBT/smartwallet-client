import styled, { css } from 'styled-components';

type SelectProps = {
  type?: string;
};

export const Container = styled.div<SelectProps>`
  user-select: none;

  ${props =>
    props.type === 'default'
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
    props.type === 'default' &&
    css`
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
          padding: 10px;
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
    `}

  ${props =>
    props.type !== 'default' &&
    css`
      position: absolute;
      background: #fff;
      display: block;
      width: 100%;
      top: 70px;
      left: 0;
      list-style: none;
      border-radius: 8px;
      z-index: 1000;

      @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        overflow: hidden;
        max-height: 80px;
      }

      li {
        button {
          width: 100%;
          height: 100%;

          @media screen and (min-width: 1024px) {
            display: block;
            width: 100%;
            height: 100vh;
            background: none;
            border: none;
            text-align: left;
            padding: 10px;
            transition: all 0.2s;
            overflow: hidden;

            &.active {
              background: #1ae5bd;
              border-radius: 8px;

              p {
                color: #fff;
              }
            }

            &:hover {
              background: #1ae5bd;
              border-radius: 8px;

              p {
                color: #fff;
              }
            }
          }
        }

        @media screen and (min-width: 1024px) {
          flex: 1;
        }
      }
    `}
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
  }
`;
