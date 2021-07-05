import React from 'react';

import { transformCurrency } from '../../shared/currency';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import {
  Container,
  Content,
  Overview,
  OverviewItem,
  Transactions,
  WrapperTable
} from './styles';

const Dashboard = () => {
  return (
    <Container>
      <h1>Overview</h1>

      <Content>
        <Overview>
          <Row sm>
            <Col sm={3} md={3} className="overview-column">
              <OverviewItem>
                <span>Last</span>
                <p>30 days</p>
              </OverviewItem>
            </Col>
            <Col sm={3} md={3} className="overview-column">
              <OverviewItem>
                <span>Bills</span>
                <div>
                  <strong>{transformCurrency(50000)}</strong>
                  <p>50%</p>
                </div>
              </OverviewItem>
            </Col>
            <Col sm={3} md={3} className="overview-column">
              <OverviewItem>
                <span>Investments</span>
                <div>
                  <strong>{transformCurrency(30000)}</strong>
                  <p>30%</p>
                </div>
              </OverviewItem>
            </Col>
            <Col sm={3} md={3} className="overview-column">
              <OverviewItem>
                <span>Fun Money</span>
                <div>
                  <strong>{transformCurrency(2000)}</strong>
                  <p>20%</p>
                </div>
              </OverviewItem>
            </Col>
          </Row>
        </Overview>

        <Transactions>
          <h3>Transactions</h3>

          <WrapperTable>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Expense</th>
                  <th>Expected</th>
                  <th>Available to spent</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
                <tr>
                  <td>Gabriel</td>
                  <td>$40</td>
                  <td>$20.00</td>
                  <td>$100.00</td>
                  <td>teste</td>
                </tr>
              </tbody>
            </table>
          </WrapperTable>
        </Transactions>
      </Content>
    </Container>
  );
};

export default Dashboard;
