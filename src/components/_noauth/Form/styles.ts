import styled from 'styled-components';

export const Container = styled.form`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #f3f4f8;
  padding: 10px 0;

  @media screen and (min-width: 1024px) {
    position: relative;
    top: 0;
    margin-top: 40px;
  }

  .description {
    display: none;

    @media screen and (min-width: 1024px) {
      margin: 40px 0;
      display: block;

      h1,
      p {
        text-align: left;
      }

      h1 {
        color: #646464;
        font-size: 30px;
      }

      p {
        margin-top: 10px;
        font-size: 20px;
        color: #b5b5b5;
      }
    }
  }

  > div {
    height: auto;

    > a {
      display: inline-block;
      color: #a2a2a2;
      text-align: right;
      margin: 10px 5px;
    }
  }
`;
