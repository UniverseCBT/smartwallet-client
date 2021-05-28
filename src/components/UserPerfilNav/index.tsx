import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  Notification,
  NotificationIcon,
  UserNavigation,
  Perfil,
  UserContent,
  User,
  UserMoney,
  Income,
  PerfilExpense,
  Categories,
  SelectCategory,
  Transactions,
  Activities,
  Symbol,
  Info,
  ActivitiesMoney
} from './styles';

import Bell from '../icons/Bell';
import MoreIncome from '../icons/MoreIncome';

import herIcon from '../../assets/icons/her.svg';
import billsIcon from '../../assets/icons/bills.svg';
import investmentsIcon from '../../assets/icons/investment.svg';
import funIcon from '../../assets/icons/fun.svg';

import spentArrow from '../../assets/icons/spent-arrow.svg';
import incomeArrow from '../../assets/icons/income-arrow.svg';

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

        <UserContent>
          <Income>
            <div>
              <h4>Income</h4>
              <p>Put your available money in your account</p>
            </div>

            <button type="button">
              <MoreIncome />
            </button>
          </Income>

          <PerfilExpense>
            <h4>Expense</h4>
            <p>Choose a category to spent</p>

            <Categories>
              <SelectCategory>
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

          <Transactions>
            <h4>Recent Activities</h4>
            <p>Your recent activities in expenses and incomes</p>

            <Activities>
              <div>
                <Symbol>
                  <img src={spentArrow} alt="arrow to right" />
                </Symbol>
                <Info>
                  <strong>StarBucks</strong>
                  <span>Bills</span>
                </Info>
              </div>
              <ActivitiesMoney type="spent">$200</ActivitiesMoney>
            </Activities>
          </Transactions>
        </UserContent>
      </UserNavigation>
    </Container>
  );
};

export default UserPerfilNav;
