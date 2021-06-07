import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: var(--white);
  border-radius: 4px;
  padding: 20px;
`;

export const Container = styled.table`
  border-collapse: collapse;

  thead tr th {
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
`;
