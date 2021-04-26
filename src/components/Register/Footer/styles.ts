import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;

  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .money {
    padding-top: 10px;
    border-top: 1px solid #ececec;
    margin: 20px 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    h4 {
      font-size: 0.8rem;
      color: #c9c9c9;
      font-weight: normal;
    }

    span {
      font-size: 1.6rem;
      color: #878787;
      font-weight: bold;
    }
  }
`;
