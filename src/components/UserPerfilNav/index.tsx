import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  Notification,
  NotificationIcon,
  UserNavigation,
  Perfil,
  User,
  UserMoney
} from './styles';

import herIcon from '../../assets/icons/her.svg';
import bellIcon from '../../assets/icons/bell.svg';

const UserPerfilNav = () => {
  return (
    <Container>
      <Header>
        <h3>Dashboard</h3>
        <Notification type="button">
          <span>Notifications</span>
          <NotificationIcon>
            <img src={bellIcon} alt="bell" />
          </NotificationIcon>
        </Notification>
      </Header>
      <UserNavigation>
        <Perfil>
          <User>
            <div className="user__icon">
              <img src={herIcon} alt="Your nickname here" />
            </div>
            <div className="user__info">
              <strong>Nickname</strong>
              <Link to="/register/income">Edit perfil</Link>
            </div>
          </User>

          <UserMoney>
            <span>Available</span>
            <strong>$1000</strong>
          </UserMoney>
        </Perfil>
      </UserNavigation>
    </Container>
  );
};

export default UserPerfilNav;
