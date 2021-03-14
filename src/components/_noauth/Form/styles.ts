import styled from 'styled-components';

export const Container = styled.form`
  position: sticky;
  top: 40px;

  @media screen and (min-width: 1024px) {
    position: relative;
    top: 0;
    margin-top: 140px;
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
    margin: 20px 0;

    > a {
      display: inline-block;
      color: #a2a2a2;
      text-align: right;
    }
  }
`;
