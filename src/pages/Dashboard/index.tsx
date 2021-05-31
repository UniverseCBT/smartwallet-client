import React from 'react';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import { Container, Content } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <h1>Overview</h1>

      <Row>
        <Col gap md={12}>
          <Content />
        </Col>
        <Col gap>
          <Content />
        </Col>
        <Col gap>
          <Content />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
