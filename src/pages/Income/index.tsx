import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  PaycheckForm,
  PaycheckList,
  PaycheckItems,
  PaycheckFooter,
  Card,
  Image,
  Utils,
  Money
} from './styles';

import Wrapper from '../../components/_noauth/Wrapper';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import Header from '../../components/_noauth/Header';
import Content, { Ref } from '../../components/_noauth/Content';
import Form from '../../components/_noauth/Form';
import SideNavigation from '../../components/_noauth/SideNavigation';

import card from '../../assets/icons/card.svg';
import more from '../../assets/icons/more.svg';

type PaycheckItems = {
  id: string;
  name: string;
};

const Income = () => {
  const [paycheckItems, setPaycheckItems] = useState([]);
  const [showActionButtons, setShowActionsButtons] = useState(false);

  const mobileContentRef = React.createRef<Ref>();

  useEffect(() => {
    function activeCallButons() {
      const windowTop = window.pageYOffset;

      if (mobileContentRef.current) {
        const contentTopDiff = windowTop - mobileContentRef.current?.offsetTop;

        if (contentTopDiff > -10) {
          setShowActionsButtons(true);
        } else {
          setShowActionsButtons(false);
        }
      }
    }

    window.addEventListener('scroll', activeCallButons);

    return () => {
      window.removeEventListener('scroll', activeCallButons);
    };
  }, [mobileContentRef, setShowActionsButtons]);

  return (
    <Wrapper>
      <Row>
        <Col column={1}>
          <SideNavigation />
        </Col>
        <Col column={3}>
          <Content ref={mobileContentRef}>
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
                      <div className="total">
                        <span>Expected</span>
                        <h4>$1500.00</h4>
                      </div>
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
                </PaycheckItems>
              </PaycheckList>
              <PaycheckFooter showActionButtons={showActionButtons}>
                <div className="money">
                  <span>Total Expected</span>
                  <h4>$ 1500.00</h4>
                </div>
                <div className="actions">
                  <button type="button">Back</button>
                  <button type="button">Next</button>
                </div>
              </PaycheckFooter>
            </Form>
          </Content>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Income;
