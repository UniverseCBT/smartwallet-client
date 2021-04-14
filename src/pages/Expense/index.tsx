import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../../components/_noauth/Wrapper';
import SideNavigation from '../../components/_noauth/SideNavigation';
import Content from '../../components/_noauth/Content';
import Header from '../../components/_noauth/Header';
import Form from '../../components/_noauth/Form';
import Select, { OptionsProps } from '../../components/Select';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import {
  ExpenseForm,
  ExpenseLabel,
  ExpenseList,
  ListHeader,
  HeaderFilter,
  LabelFilter,
  ExpensesCreated,
  Description,
  Utils,
  Action
} from './styles';

import investmentIcon from '../../assets/icons/investment.svg';
import funIcon from '../../assets/icons/fun.svg';
import billsIcon from '../../assets/icons/bills.svg';
import moreVerticalIcon from '../../assets/icons/more-vertical.svg';

const Expense = () => {
  const [selectValue, setSelectValue] = useState<string | number>('' || 0);

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
                <ListHeader>
                  <h5>Expenses created</h5>
                  <HeaderFilter>
                    <LabelFilter>
                      <label htmlFor="all">
                        <input
                          type="radio"
                          id="all"
                          value="all"
                          name="expenses"
                          defaultChecked
                        />
                        <span>All</span>
                      </label>
                      <span className="size">0</span>
                    </LabelFilter>
                    <LabelFilter>
                      <label htmlFor="investment">
                        <img src={investmentIcon} alt="currency in up" />
                        <input
                          type="radio"
                          id="investment"
                          value="investment"
                          name="expenses"
                        />
                      </label>
                      <span className="size">0</span>
                    </LabelFilter>
                    <LabelFilter>
                      <label htmlFor="funmoney">
                        <img src={funIcon} alt="market" />
                        <input
                          type="radio"
                          id="funmoney"
                          value="funmoney"
                          name="expenses"
                        />
                      </label>
                      <span className="size">0</span>
                    </LabelFilter>
                    <LabelFilter>
                      <label htmlFor="bills">
                        <img src={billsIcon} alt="Dolar in paper" />
                        <input
                          type="radio"
                          id="bills"
                          value="bills"
                          name="expenses"
                        />
                      </label>
                      <span className="size">0</span>
                    </LabelFilter>
                    <div className="filter-item-mobile">
                      <button type="button">
                        <img src={moreVerticalIcon} alt="Dolar in paper" />
                        <span>Filter</span>
                      </button>
                    </div>
                  </HeaderFilter>
                </ListHeader>
                <ExpensesCreated>
                  <Description>
                    <h6>Star Bucks</h6>
                    <span>2 days in week</span>
                  </Description>
                  <Utils>
                    <strong>$10.00</strong>
                    <span>Fun Money</span>
                  </Utils>
                  <Action>edit delete</Action>
                </ExpensesCreated>
              </ExpenseList>
            </Form>
          </Content>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Expense;
