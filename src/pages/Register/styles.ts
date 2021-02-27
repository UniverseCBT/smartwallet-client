import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(172deg, #09C4A7 0%, #01AA90 100%);

  .navigation {
    position: relative;
    z-index: 10;
    padding: 0 20px;
    height: 40vh;

    @media screen and (min-width: 768px) {
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 0;

      .logo-content {
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
          border-radius: 30px;
          position: relative;
          z-index: 50;
        }

        .content-description {
          overflow: hidden;
          position: relative;

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
    }
  }
`;
