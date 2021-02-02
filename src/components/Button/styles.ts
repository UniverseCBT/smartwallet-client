import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background: #2DCDA3;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: bold;

  @media screen and (min-width: 558px) {
    padding: 1rem 5rem;
    width: unset;
  }
`;
