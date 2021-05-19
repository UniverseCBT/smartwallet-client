import React from 'react';

import { Container, Header, Notification, NotificationIcon } from './styles';

import herIcon from '../../assets/icons/her.svg';

const UserPerfilNav = () => {
  return (
    <Container>
      <Header>
        <h3>Dashboard</h3>
        <Notification type="button">
          <span>Notifications</span>
          <NotificationIcon>
            <img src={herIcon} alt="bell" />
          </NotificationIcon>
        </Notification>
      </Header>
    </Container>
  );
};

export default UserPerfilNav;
