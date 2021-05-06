import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled.nav`
  background-color: #fff;
  width: 100%;
  padding: 15px 10px;

  @media screen and (min-width: 575px) {
    padding: 0;
    position: relative;
    height: 100vh;
    width: 55px;
    overflow-y: hidden;
  }

  @media screen and (min-width: 1024px) {
    width: 90px;
  }
`;

export const NavigationItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 575px) {
    align-items: center;
    flex-direction: column;
    padding: 20px 15px;
    height: 100%;
  }
`;

export const NavigationContent = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 575px) {
    width: auto;
    flex-direction: column;
    height: 100%;
  }
`;

export const ItemsContent = styled.div`
  @media screen and (min-width: 575px) {
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
  }
`;

export const Content = styled(Link)`
  & + a {
    margin-left: 5px;

    @media screen and (min-width: 575px) {
      margin-top: 15px;
      margin-left: 0;
    }
  }

  img {
    width: 30px;
    height: 26px;
  }
`;
