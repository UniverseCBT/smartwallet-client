import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import Wrapper from '../../components/_noauth/Wrapper';
import SideNavigation from '../../components/_noauth/SideNavigation';
import Content, { Ref } from '../../components/_noauth/Content';
import Header from '../../components/_noauth/Header';
import Form from '../../components/_noauth/Form';

import Input from '../../components/Input';
import Select, { OptionsProps } from '../../components/Select';
import Filter from '../../components/Register/Filter';
import List from '../../components/Register/List';
import RegisterFooter from '../../components/Register/Footer';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import { detectPhone } from '../../shared/detectPhone';

import { ExpenseForm, ButtonForm, ExpenseList } from './styles';

import investmentIcon from '../../assets/icons/investment.svg';
import funIcon from '../../assets/icons/fun.svg';
import billsIcon from '../../assets/icons/bills.svg';

type ExpenseItems = {
  id: string;
  title: string;
  description: string;
  money: number;
  category?: string;
};

const Expense = () => {
  const { register } = useForm();

  const [habitsItems, setHabitsItems] = useState<ExpenseItems[]>([]);
  const [selectValue, setSelectValue] = useState<string | number>('' || 0);
  const [filterValue, setFilterValue] = useState<string>('all');

  const contentRef = useRef<Ref | null>(null);
  const habitListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current && habitListRef.current) {
      contentRef.current.scrollTo({
        top: habitListRef.current.clientHeight,
        behavior: 'smooth'
      });

      const detectMobilePhone = detectPhone();
      if (detectMobilePhone && habitsItems.length > 5) {
        window.scrollTo({
          top: habitListRef.current.clientHeight + 100,
          behavior: 'smooth'
        });
      }
    }
  }, [contentRef, habitsItems, habitListRef]);

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

  const handleAddPaycheckList = () => {
    setHabitsItems([
      ...habitsItems,
      {
        id: v4(),
        title: 'Star Bucks',
        description: '2 days in week',
        money: 10.0,
        category: 'Fun Money'
      }
    ]);
  };

  return (
    <Wrapper>
      <Row>
        <Col column={1}>
          <SideNavigation />
        </Col>
        <Col column={3}>
          <Content ref={contentRef}>
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
                    <Input
                      inputName="name"
                      text="Habit Name"
                      register={register}
                    />
                  </Col>
                  <Col>
                    <Input
                      inputName="spent"
                      text="Expected spent"
                      register={register}
                    />
                  </Col>
                  <Col>
                    <Select
                      options={selectOption}
                      label="Category"
                      setValue={setSelectValue}
                      type="complex"
                    />
                  </Col>
                  <Col column={1} align="center">
                    <ButtonForm type="button" onClick={handleAddPaycheckList}>
                      +
                    </ButtonForm>
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
                <List data={habitsItems} ref={habitListRef} />
              </ExpenseList>
              <RegisterFooter totalMoney={0} />
            </Form>
          </Content>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Expense;
