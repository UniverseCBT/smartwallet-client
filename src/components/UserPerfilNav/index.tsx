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

import Bell from '../icons/Bell';

import herIcon from '../../assets/icons/her.svg';

const UserPerfilNav = () => {
  return (
    <Container>
      <Header>
        <h3>Dashboard</h3>
        <Notification type="button">
          <span>Notifications</span>
          <NotificationIcon>
            <Bell />
            <span>100+</span>
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
