import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled.nav`
  position: relative;
  width: auto;
  height: 100vh;
  overflow-y: hidden;
  background-color: #fff;
`;

export const NavigationItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemsContent = styled.div``;

export const Content = styled(Link)``;
