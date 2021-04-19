import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

import Wrapper from '../../components/_noauth/Wrapper';
import SideNavigation from '../../components/_noauth/SideNavigation';
import Content from '../../components/_noauth/Content';
import Header from '../../components/_noauth/Header';
import Form from '../../components/_noauth/Form';
import Select, { OptionsProps } from '../../components/Select';
import Filter from '../../components/Register/Filter';
import List from '../../components/Register/List';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import {
  ExpenseForm,
  ExpenseLabel,
  ExpenseList,
  ExpensesCreated,
  Description,
  Utils,
  Features,
  Actions,
  ExpenseFooter
} from './styles';

import investmentIcon from '../../assets/icons/investment.svg';
import funIcon from '../../assets/icons/fun.svg';
import billsIcon from '../../assets/icons/bills.svg';
import moreVerticalIcon from '../../assets/icons/more-vertical.svg';
import moreIcon from '../../assets/icons/more.svg';
import trashIcon from '../../assets/icons/trash.svg';
import penIcon from '../../assets/icons/pen.svg';
import arrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import arrowRightIcon from '../../assets/icons/arrowRight.svg';

const Expense = () => {
  const [selectValue, setSelectValue] = useState<string | number>('' || 0);
  const [filterValue, setFilterValue] = useState<string>('all');

  const selectOption: OptionsProps[] = [
    {
      label: 'Investment',
      value: 'investment',
      description: 'From saving accounts to things you expect financial return',
      icon: investmentIcon,
      iconText: 'currency in up'
    },
    {
      label: 'Fun money',
      value: 'funmoney',
      description: `You don't really need it but it makes your life better`,
      icon: funIcon,
      iconText: 'market'
    },
    {
      label: 'Bills',
      value: 'bills',
      description: 'Everything you have to pay',
      icon: billsIcon,
      iconText: 'Dolar in paper'
    }
  ];

  return (
    <Wrapper>
      <Row>
        <Col column={1}>
          <SideNavigation />
        </Col>
        <Col column={3}>
          <Content>
            <Header>
              <p>
                {`Having trouble ? `}
                <Link to="/">Get Help</Link>
              </p>
            </Header>
            <Form>
              <div className="description">
                <h1>Now lets calculate your expenses</h1>
                <p>
                  Tip : make a list on everything you spend more than twice a
                  month
                </p>
              </div>
              <ExpenseForm>
                <Row>
                  <Col>
                    <ExpenseLabel>
                      <span>Paycheck</span>
                      <input
                        type="text"
                        id="paycheck"
                        placeholder="Paycheck name"
                      />
                    </ExpenseLabel>
                  </Col>
                  <Col>
                    <Select
                      options={selectOption}
                      label="Category"
                      type="lg"
                      setValue={setSelectValue}
                    />
                  </Col>
                  <Col>
                    <ExpenseLabel>
                      <span>Paycheck</span>
                      <input
                        type="text"
                        id="paycheck"
                        placeholder="Paycheck name"
                      />
                    </ExpenseLabel>
                  </Col>
                </Row>
              </ExpenseForm>
              <ExpenseList>
                <Filter
                  title="Expense Created"
                  setFilterValue={setFilterValue}
                  itemsFilter={[
                    {
                      id: 'all',
                      name: 'expenses',
                      value: 'all',
                      default: true,
                      text: 'All',
                      size: 0
                    },
                    {
                      id: 'investment',
                      name: 'expenses',
                      value: 'investment',
                      image: {
                        alt: 'currency in up',
                        url: investmentIcon
                      },
                      size: 0
                    },
                    {
                      id: 'funmoney',
                      name: 'expenses',
                      value: 'funmoney',
                      image: {
                        alt: 'market',
                        url: funIcon
                      },
                      size: 0
                    },
                    {
                      id: 'bills',
                      name: 'expenses',
                      value: 'bills',
                      image: {
                        alt: 'Dolar in paper',
                        url: billsIcon
                      },
                      size: 0
                    }
                  ]}
                />
                <List
                  data={[
                    {
                      id: v4(),
                      title: 'Star Bucks',
                      description: '2 days in week',
                      money: 10.0,
                      category: 'Fun Money'
                    },
                    {
                      id: v4(),
                      title: 'Star Bucks',
                      description: '2 days in week',
                      money: 10.0,
                      category: 'Fun Money'
                    }
                  ]}
                />
                {/* <ExpensesCreated>
                  <Description>
                    <h6>Star Bucks</h6>
                    <span>2 days in week</span>
                  </Description>
                  <Utils>
                    <Features>
                      <strong>$10.00</strong>
                      <span>Fun Money</span>
                    </Features>
                    <Actions>
                      <button type="button">
                        <img src={moreIcon} alt="three points" />
                      </button>
                    </Actions>
                  </Utils>
                </ExpensesCreated>
                <ExpensesCreated>
                  <Description>
                    <h6>Star Bucks</h6>
                    <span>2 days in week</span>
                  </Description>
                  <Utils>
                    <Features>
                      <strong>$10.00</strong>
                      <span>Fun Money</span>
                    </Features>
                    <Actions>
                      <button type="button">
                        <img src={moreIcon} alt="three points" />
                      </button>
                    </Actions>
                  </Utils>
                </ExpensesCreated>
                <ExpensesCreated>
                  <Description>
                    <h6>Star Bucks</h6>
                    <span>2 days in week</span>
                  </Description>
                  <Utils>
                    <Features>
                      <strong>$10.00</strong>
                      <span>Fun Money</span>
                    </Features>
                    <Actions>
                      <button type="button">
                        <img src={moreIcon} alt="three points" />
                      </button>
                    </Actions>
                  </Utils>
                </ExpensesCreated> */}
              </ExpenseList>
              <ExpenseFooter>
                <div className="actions">
                  <button type="button">
                    <img src={arrowLeftIcon} alt="arrow left" />
                    Back
                  </button>
                  <button type="button">
                    Next
                    <img src={arrowRightIcon} alt="arrow right" />
                  </button>
                </div>

                <div className="money">
                  <h4>Total Expected</h4>
                  <span>$0</span>
                </div>
              </ExpenseFooter>
            </Form>
          </Content>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Expense;
