import React from 'react';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import { Container, Content, Overview, OverviewItem } from './styles';

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
                  <strong>$500</strong>
                  <p>50%</p>
                </div>
              </OverviewItem>
            </Col>
            <Col sm={3} md={3} className="overview-column">
              <OverviewItem>
                <span>Investments</span>
                <div>
                  <strong>$300</strong>
                  <p>50%</p>
                </div>
              </OverviewItem>
            </Col>
            <Col sm={3} md={3} className="overview-column">
              <OverviewItem>
                <span>Fun Money</span>
                <div>
                  <strong>$200</strong>
                  <p>20%</p>
                </div>
              </OverviewItem>
            </Col>
          </Row>
        </Overview>
      </Content>
    </Container>
  );
};

export default Dashboard;
