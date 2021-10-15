import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ContentProps {
  register: boolean;
}

interface StepProps {
  $activelink?: boolean;
}

export const Container = styled.div`
  padding: 40px 0;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    position: relative;
    height: 100vh;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 20px;

  @media screen and (min-width: 1024px) {
    display: block;
  }

  a {
    display: flex;
    align-items: center;

    div {
      display: flex;
      align-items: center;

      &:before {
        content: '';
        display: inline-block;
        min-height: 100%;
        height: 23px;
        width: 2px;
        background: #174c64;
        margin: 0 0 0 15px;
        border-radius: 1000px;
        position: relative;
        left: 0;
        top: 0;
        z-index: 50;
      }

      p {
        color: #f3f4f8;
        font-weight: bold;
        position: relative;
        top: 0;
        left: 0;
        margin-left: 10px;
      }
    }
  }
`;

export const Content = styled.div<ContentProps>`
  ${props =>
    !props.register &&
    css`
      margin: 40px 10px 20px;
      text-align: left;

      h1 {
        padding: 0 0 10px;
        color: #f3f4f8;
      }

      p {
        color: #f3f4f8;
        font-weight: bold;
      }

      @media screen and (min-width: 1024px) {
        width: 100%;

        .art {
          display: flex;
          justify-content: center;
        }

        h1,
        p {
          display: none;
        }
      }
    `}

  ${props =>
    props.register &&
    css`
      @media screen and (min-width: 1024px) {
        margin: 150px 20px 0;

        ul li {
          margin-left: 50px;

          & + li {
            margin-top: 60px;
            position: relative;

            &::before {
              content: '';
              position: absolute;
              bottom: 100%;
              left: 0;
              height: 100%;
              width: 2px;
              background: #ffffffa6;
              transform: translate3d(21px, -15%, 0);
            }
          }
        }
      }
    `}
`;

export const Step = styled(Link)<StepProps>`
  display: none;
  align-items: center;

  @media screen and (min-width: 1024px) {
    display: flex;
  }

  ${props =>
    props.$activelink &&
    css`
      display: flex;
      margin: 40px 10px 20px;

      @media screen and (min-width: 1024px) {
        margin: 40px 0 0;
      }
    `}

  .content-number {
    border: 2px solid #ffffffa6;
    color: #ffffffa6;
    padding: 15px;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 42px;

    display: flex;
    align-items: center;

    ${props =>
      props.$activelink &&
      css`
        color: #fff;
        border: 2px solid #fff;
      `}

    @media screen and (max-width: 1024px) {
      display: none;
    }

    @media screen and (min-width: 1024px) {
      font-size: 18px;
      padding: 10px;
    }
  }

  p {
    display: block;
    font-size: 28px;
    margin-top: 5px;
    color: #f3f4f8;
    font-weight: bold;

    @media screen and (min-width: 1024px) {
      font-size: 18px;
      margin-top: 0;
      color: ${props => (props.$activelink ? '#f3f4f8' : '#ffffffa6')};
      font-weight: ${props => (props.$activelink ? 'bold' : 'normal')};
    }
  }
`;

export const StepContent = styled.div<StepProps>`
  color: #f3f4f8;
  font-size: 14px;
  font-weight: bold;

  @media screen and (min-width: 1024px) {
    font-weight: ${props => (props.$activelink ? 'bold' : 'normal')};
    font-size: 12px;
    color: ${props => (props.$activelink ? '#f3f4f8' : '#ffffffa6')};
  }

  .total-step {
    margin-left: 5px;
    color: #ffffffa6;
    font-weight: normal;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;
