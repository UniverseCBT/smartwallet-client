import React from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

import Wrapper from '../../components/_noauth/Wrapper';
import SideNavigation from '../../components/_noauth/SideNavigation';
import Content from '../../components/_noauth/Content';
import Header from '../../components/_noauth/Header';
import Form from '../../components/_noauth/Form';

import List from '../../components/Register/List';
import RegisterButton from '../../components/Register/Button';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import arrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import arrowRightIcon from '../../assets/icons/arrowRight.svg';

import { Footer } from './styles';

const Expense = () => {
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
                <h1>You`re all set</h1>
                <p>
                  Tip : make a list on everything you spend more than twice a
                  month
                </p>
              </div>
              <List
                actionButton={false}
                data={[
                  {
                    id: v4(),
                    title: 'Income',
                    description: 'What to expect to enter on week',
                    money: 1000.0
                  },
                  {
                    id: v4(),
                    title: 'Budget',
                    description: 'What to expect to leave on week',
                    money: 100.0
                  },
                  {
                    id: v4(),
                    title: 'Calculate',
                    description: 'expected income and budget',
                    money: 900
                  }
                ]}
              />
              <Footer>
                <RegisterButton
                  text="Back"
                  icon={{
                    url: arrowLeftIcon,
                    altText: 'Arrow left',
                    side: 'left'
                  }}
                  theme="back"
                />
                <RegisterButton
                  text="Finish"
                  icon={{
                    url: arrowRightIcon,
                    altText: 'Arrow right',
                    side: 'right'
                  }}
                />
              </Footer>
            </Form>
          </Content>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Expense;
