import React from 'react';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';
import SpentCard from '../../components/SpentCard';

import { Container, Content } from './styles';

import bills from '../../assets/icons/bills.svg';
import fun from '../../assets/icons/fun.svg';
import investment from '../../assets/icons/investment.svg';

const Dashboard = () => {
  return (
    <Container>
      <h1>Overview</h1>

      <Content>
        <Row>
          <Col gap column={1}>
            <SpentCard
              image={bills}
              title="Bills"
              percent={50}
              available="$500"
              total="$1000"
            />
          </Col>
          <Col gap column={1}>
            <SpentCard
              image={investment}
              title="Investments"
              percent={50}
              available="$500"
              total="$1000"
            />
          </Col>
          <Col gap column={1}>
            <SpentCard
              image={fun}
              title="Fun Money"
              percent={50}
              available="$500"
              total="$1000"
            />
          </Col>
        </Row>
      </Content>
    </Container>
  );
};

export default Dashboard;
