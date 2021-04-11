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

import { ExpenseForm, ExpenseLabel } from './styles';

import investmentIcon from '../../assets/icons/investment.svg';
import funIcon from '../../assets/icons/fun.svg';
import billsIcon from '../../assets/icons/bills.svg';

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
              {/* <PaycheckForm>
                <Row>
                  <Col>
                    <PaycheckLabel htmlFor="paycheck">
                      <span>Paycheck</span>
                      <input
                        type="text"
                        id="paycheck"
                        placeholder="Paycheck name"
                      />
                    </PaycheckLabel>
                  </Col>
                  <Col>
                    <Select
                      label="Timeframe"
                      options={selectOptions}
                      setValue={setSelectValue}
                    />
                  </Col>
                  <Col>
                    <PaycheckLabel htmlFor="expectedMoney">
                      <span>Expected money</span>
                      <input type="text" id="expectedMoney" />
                    </PaycheckLabel>
                  </Col>
                  <Col column={1}>
                    <div className="right-button">
                      <div className="total">
                        <span>Expected</span>
                        <h4>$1500.00</h4>
                      </div>
                      <button type="button" onClick={handleAddPaycheckList}>
                        <img src={more} alt="more paycheck" />
                      </button>
                    </div>
                  </Col>
                </Row>
              </PaycheckForm>
              <PaycheckList ref={paycheckListRef}>
                {paycheckItems.length > 0 && <h2>Paychecks added</h2>}
                {paycheckItems.length > 0 &&
                  paycheckItems.map(paycheck => (
                    <PaycheckItems key={paycheck.id}>
                      <Card>
                        <Image>
                          <img src={card} alt="checked icon" />
                        </Image>
                        <Utils>
                          <strong>{paycheck.name}</strong>
                          <span>{paycheck.date}</span>
                        </Utils>
                        <Money>
                          <span>Expected</span>
                          <strong>
                            {transformCurrency(paycheck.expected_money)}
                          </strong>
                        </Money>
                      </Card>
                    </PaycheckItems>
                  ))}
              </PaycheckList>
              <PaycheckFooter
                ref={paycheckFooterRef}
                showActionButtons={showActionButtons}
              >
                <div className="money">
                  <span>Total Expected</span>
                  <h4>$ 1500.00</h4>
                </div>
                <div className="actions">
                  <button type="button">Back</button>
                  <button type="button">Next</button>
                </div>
              </PaycheckFooter> */}
            </Form>
          </Content>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Expense;
