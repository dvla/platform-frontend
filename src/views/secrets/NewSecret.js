import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SecretForm from './SecretForm';

export default class NewSecret extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <div className="container-fluid">
          <h1 data-testid="title" className="h3 mb-4 text-gray-800">
            Kubernetes Secrets
          </h1>
          <Card className="shadow mb-4">
            <Card.Header className="py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                New Kubernetes Secret
              </h6>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <SecretForm />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
