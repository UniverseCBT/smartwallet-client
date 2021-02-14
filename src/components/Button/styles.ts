import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background: #2DCDA3;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 0;
  margin-top: 20px;
  font-size: 1rem;
  font-weight: bold;

  @media screen and (min-width: 1024px) {
    padding: 14px 5rem;
    width: unset;
    display: block;
    margin-left: auto;
    margin-top: 5px;
  }
`;
