import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;

  h1 {
    color: var(--title);
    font-size: 1.7rem;
  }
`;

export const Content = styled.div`
  margin-top: 25px;
`;

export const Overview = styled.div`
  @media screen and (min-width: 575px) {
    border-bottom: 1px solid var(--border);
    padding: 20px 0 30px;
  }

  & > div .overview-column + .overview-column {
    border-top: 1px solid var(--border);
    margin-top: 10px;
    padding-top: 10px;

    @media screen and (min-width: 575px) {
      border-top: none;
      border-left: 1px solid var(--border);
      padding-left: 20px;
      margin-top: 0;
      padding-top: 0;
    }
  }
`;

export const OverviewItem = styled.div`
  span {
    color: var(--border);
    font-size: 1rem;

    @media screen and (min-width: 1440px) {
      font-size: 1.4rem;
    }
  }

  > p {
    color: var(--title);
    font-size: 1.3rem;
    margin-top: 5px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 10px;

    strong {
      font-size: 1.3rem;
      color: var(--title);

      @media screen and (min-width: 575px) {
        font-size: 0.8rem;
      }

      @media screen and (min-width: 1440px) {
        font-size: 1.3rem;
      }
    }

    p {
      color: var(--text);

      @media screen and (min-width: 575px) and (max-width: 1440px) {
        font-size: 0.8rem;
        margin-left: 10px;
      }
    }
  }
`;

export const Transactions = styled.div`
  padding: 40px 0;

  h3 {
    color: var(--title);
    font-size: 1.5rem;
    margin-bottom: 40px;
  }
`;

export const WrapperTable = styled.div`
  width: 100%;
  background: var(--white);
  border-radius: 4px;
  overflow: auto;

  @media screen and (min-width: 1024px) {
    padding: 10px 1rem;
  }

  table {
    border-collapse: collapse;
    width: 100%;

    thead {
      border-bottom: 1px solid var(--title);

      th {
        padding: 1.3rem 1rem;
        text-align: left;
        position: relative;
        color: var(--shadow);
        font-weight: normal;
      }

      th + th::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        height: 30px;
        width: 2px;
        background: var(--shadow);
      }
    }

    tbody {
      td {
        padding: 1.3rem 1rem;
      }
    }
  }
`;
