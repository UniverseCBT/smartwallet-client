import styled, { css } from 'styled-components';

type ContentProps = {
  register?: boolean;
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
        background: #174C64;
        margin: 0 0 0 15px;
        border-radius: 1000px;
        position: relative;
        left: 0;
        top: 0;
        z-index: 50;
      }

      p {
        color: #F3F4F8;
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
  ${props => !props.register && css`
    margin: 40px 0 20px;
    text-align: center;

    h1 {
      padding: 0 0 10px;
      color: #F3F4F8;
    }

    p {
      color: #F3F4F8;
      font-weight: bold;
    }

    @media screen and (min-width: 1024px) {
      width: 100%;

      .art {
        display: flex;
        justify-content: center;
      }

      h1, p {
        display: none;
      }
    }
  `}

  ${props => props.register && css``}
`;
