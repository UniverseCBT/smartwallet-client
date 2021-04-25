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
import Button from '../../components/Register/Button';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import {
  ExpenseForm,
  ExpenseLabel,
  ExpenseList,
  ExpenseFooter
} from './styles';

import investmentIcon from '../../assets/icons/investment.svg';
import funIcon from '../../assets/icons/fun.svg';
import billsIcon from '../../assets/icons/bills.svg';
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
      icon: {
        path: investmentIcon,
        text: 'currency in up'
      }
    },
    {
      label: 'Fun money',
      value: 'funmoney',
      description: `You don't really need it but it makes your life better`,
      icon: {
        path: funIcon,
        text: 'market'
      }
    },
    {
      label: 'Bills',
      value: 'bills',
      description: 'Everything you have to pay',
      icon: {
        path: billsIcon,
        text: 'Dolar in paper'
      }
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
                      setValue={setSelectValue}
                      type="complex"
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
                  title="Expenses"
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
              </ExpenseList>
              <ExpenseFooter>
                <div className="actions">
                  <Button
                    text="Back"
                    theme="back"
                    icon={{ url: arrowLeftIcon, altText: 'arrow left' }}
                  />
                  <Button
                    text="Next"
                    icon={{
                      url: arrowRightIcon,
                      altText: 'arrow right',
                      side: 'right'
                    }}
                  />
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
