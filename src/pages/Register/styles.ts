import styled from 'styled-components';

export const Container = styled.div`
  .navigation {
    position: relative;
    z-index: 10;
    padding: 0 20px;
    height: 40vh;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 0;

      @media screen and (min-width: 1024px) {
        justify-content: flex-start;
      }

      a {
        display: flex;
        align-items: center;

        .logo-content {
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

          .content-description {
            position: relative;

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
      }
    }
  }
`;
