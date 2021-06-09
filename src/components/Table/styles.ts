import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: var(--white);
  border-radius: 4px;
  padding: 20px;
`;

export const Container = styled.table`
  thead {
    display: none;
  }

  tbody tr td {
    display: block;
    text-align: right;
    padding-left: 50px;
    position: relative;
  }
`;
