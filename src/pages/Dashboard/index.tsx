import React from 'react';

import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

import { Container, Content } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <h1>Overview</h1>

      <Row>
        <Col>
          <h1>Content</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
