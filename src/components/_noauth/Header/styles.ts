import styled from 'styled-components';

interface Props {
  page?: string;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  width: 100%;
  margin-bottom: 30px;

  .back-login {
    text-align: left;

    a {
      color: #333;
      font-size: 18px;
      position: relative;
      display: flex;
      align-items: center;

      &:hover {
        strong {
          background: #f3f4f8;
          color: #333;
          font-weight: normal;
          margin-right: 0;
        }
      }

      strong {
        color: #333;
        padding: 5px 11px;
        border-radius: 1000px;
        margin-right: 5px;
        transition: all 0.2s;
        font-weight: normal;
      }
    }
  }

  p {
    color: #4c616b;
    display: ${props => (props.page !== 'perfil' ? 'unset' : 'none')};

    @media screen and (min-width: 468px) {
      display: block;
    }

    > a {
      color: #2dcda3;
      font-weight: bold;
    }
  }
`;
