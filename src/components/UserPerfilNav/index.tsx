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
  UserMoney,
  PerfilExpense,
  Categories,
  SelectCategory
} from './styles';

import Bell from '../icons/Bell';

import herIcon from '../../assets/icons/her.svg';
import billsIcon from '../../assets/icons/bills.svg';
import investmentsIcon from '../../assets/icons/investment.svg';
import funIcon from '../../assets/icons/fun.svg';

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

        <PerfilExpense>
          <h4>Expense</h4>
          <p>Choose a category to spent</p>

          <Categories>
            <SelectCategory active>
              <img src={billsIcon} alt="paper with dollar" />
              <p>Bills</p>
            </SelectCategory>
            <SelectCategory>
              <img src={investmentsIcon} alt="Dolar cent in up" />
              <p>Investiments</p>
            </SelectCategory>
            <SelectCategory>
              <img src={funIcon} alt="market" />
              <p>Fun Money</p>
            </SelectCategory>
          </Categories>
        </PerfilExpense>
      </UserNavigation>
    </Container>
  );
};

export default UserPerfilNav;
