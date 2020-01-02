import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default () => (
  <div className="NotFound">
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3" data-testid="not found message">
                Oops! You&rsquo;re lost.
              </h4>
              <p className="text-muted float-left">
                The page you are looking for was not found.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);
