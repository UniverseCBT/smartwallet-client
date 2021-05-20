import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled.nav`
  background-color: #fff;
  padding: 15px 0;
  width: 60px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media screen and (min-width: 1024px) {
    width: 90px;
    position: relative;
  }
`;

export const NavigationItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px 15px;
  height: 100%;
`;

export const NavigationContent = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: auto;
  height: 100%;
`;

export const ItemsContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  border-top: 1px solid #f3f4f8;
  margin-top: 20px;
  padding-top: 20px;

  &#end {
    border-top: none;
    align-self: flex-end;
  }
`;

export const Content = styled(Link)`
  & + a {
    margin-top: 15px;
  }

  img {
    width: 30px;
    height: 26px;
  }
`;
