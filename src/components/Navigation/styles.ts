import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled.nav`
  position: relative;
  height: 100vh;
  width: 55px;
  overflow-y: hidden;
  background-color: #fff;
`;

export const NavigationItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 15px;
`;

export const ItemsContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  border-top: 1px solid #f3f4f8;
  margin-top: 20px;
  padding-top: 20px;
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
