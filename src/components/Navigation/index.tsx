import React from 'react';

import {
  NavigationWrapper,
  NavigationItems,
  NavigationContent,
  ItemsContent,
  Content
} from './styles';

import Logo from '../icons/Logo';

import dashboardIcon from '../../assets/icons/dashboard.svg';
import historicIcon from '../../assets/icons/historic.svg';
import exitIcon from '../../assets/icons/exit.svg';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationItems>
        <Logo />
        <NavigationContent>
          <ItemsContent id="center">
            <Content to="/">
              <img src={dashboardIcon} alt="floater" />
            </Content>
            <Content to="/historic">
              <img src={historicIcon} alt="crusades arrow" />
            </Content>
          </ItemsContent>
          <ItemsContent id="end">
            <Content to="/historic">
              <img src={exitIcon} alt="door with arrow" />
            </Content>
          </ItemsContent>
        </NavigationContent>
      </NavigationItems>
    </NavigationWrapper>
  );
};

export default Navigation;
