import React from 'react';

import {
  NavigationWrapper,
  NavigationItems,
  ItemsContent,
  Content
} from './styles';

import Logo from '../icons/Logo';

import dashboardIcon from '../../assets/icons/dashboard.svg';
import historicIcon from '../../assets/icons/historic.svg';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationItems>
        <Logo />
        <ItemsContent>
          <Content to="/">
            <img src={dashboardIcon} alt="floater" />
          </Content>
          <Content to="/historic">
            <img src={historicIcon} alt="crusades arrow" />
          </Content>
        </ItemsContent>
      </NavigationItems>
    </NavigationWrapper>
  );
};

export default Navigation;
