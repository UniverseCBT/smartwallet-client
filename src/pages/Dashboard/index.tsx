import React from 'react';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';
import SpentCard from '../../components/SpentCard';

import { Container, Content } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <h1>Overview</h1>

      <Content>
        <Row>
          <Col column={1}>
            <SpentCard />
          </Col>
          <Col column={1}>
            <SpentCard />
          </Col>
          <Col column={1}>
            <SpentCard />
          </Col>
        </Row>
      </Content>
    </Container>
  );
};

export default Dashboard;
