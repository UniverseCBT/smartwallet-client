import React from 'react';

import { Container, MobileNav, NavPrinciple, NavPerfil } from './styles';

import menuIcon from '../../assets/icons/menu-left-alt.svg';
import herIcon from '../../assets/icons/her.svg';
import exitIcon from '../../assets/icons/exit.svg';

const Navigation = () => {
  return (
    <Container>
      <MobileNav>
        <NavPrinciple>
          <button type="button">
            <img src={menuIcon} alt="three retangules" />
          </button>
          <h5>Dashboard</h5>
        </NavPrinciple>
        <NavPerfil>
          <button type="button">
            <img src={herIcon} alt="woman with mask" />
          </button>
          <button type="button">
            <img src={exitIcon} alt="door with arrow to left" />
          </button>
        </NavPerfil>
      </MobileNav>
    </Container>
  );
};

export default Navigation;
