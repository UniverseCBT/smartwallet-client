import React from 'react';
import { Link } from 'react-router-dom';

import {
  PaycheckForm,
  PaycheckList,
  PaycheckItems,
  Card,
  Image,
  Utils,
  Money
} from './styles';

import Wrapper from '../../components/_noauth/Wrapper';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import Header from '../../components/_noauth/Header';
import Content from '../../components/_noauth/Content';
import Form from '../../components/_noauth/Form';
import SideNavigation from '../../components/_noauth/SideNavigation';

import card from '../../assets/icons/card.svg';
import more from '../../assets/icons/more.svg';

const Income = () => {
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
                <h1>Lets calculate your income</h1>
                <p>
                  Tip : make a list on everything you spend more than twice a
                  month
                </p>
              </div>
              <PaycheckForm>
                <Row>
                  <Col>
                    <label htmlFor="paycheck">
                      <span>Paycheck</span>
                      <input type="text" id="paycheck" />
                    </label>
                  </Col>
                  <Col>
                    <label htmlFor="payment">
                      <span>Your paycheck is</span>
                      <input type="text" id="payment" />
                    </label>
                  </Col>
                  <Col>
                    <label htmlFor="expectedMoney">
                      <span>Expected money</span>
                      <input type="text" id="expectedMoney" />
                    </label>
                  </Col>
                  <Col column={1}>
                    <div className="right-button">
                      <button type="button">
                        <img src={more} alt="more paycheck" />
                      </button>
                    </div>
                  </Col>
                </Row>
              </PaycheckForm>
              <PaycheckList>
                <h2>Paychecks added</h2>
                <PaycheckItems>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                  <Card>
                    <Image>
                      <img src={card} alt="seila" />
                    </Image>
                    <Utils>
                      <strong>front end dev</strong>
                      <span>Weekly</span>
                    </Utils>
                    <Money>
                      <span>Expected</span>
                      <strong>$500.00</strong>
                    </Money>
                  </Card>
                </PaycheckItems>
              </PaycheckList>
            </Form>
          </Content>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Income;
