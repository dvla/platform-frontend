import React, { Component } from 'react';
import { API } from 'aws-amplify';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';

// import Table from "../../components/Table";

export default class Secrets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parameters: []
    };
  }

  async componentDidMount() {
    this.setState({ parameters: await Secrets.getData() });
  }

  static async getData() {
    const apiName = 'backend';
    const path = 'ssm/getParameters/kubernetes';
    return API.get(apiName, path);
  }

  render() {
    const { parameters } = this.state;

    return (
      <>
        <div className="container-fluid">
          <h1 className="h3 mb-4 text-gray-800">Kubernetes Secrets</h1>
          <p>
            Kubernetes secret objects let you store and manage sensitive
            information, such as passwords, OAuth tokens, and ssh keys. Putting
            this information in a secret is safer and more flexible than putting
            it verbatim in a Pod definition or in a container image
          </p>

          <Card className="shadow mb-4">
            <Card.Body>
              <Row>
                <Col className="d-flex pb-3">
                  <p className="align-middle">
                    Number of Parameters: {parameters.length}
                  </p>
                </Col>
                <Col className="d-flex flex-row-reverse pb-3">
                  <LinkContainer to="/kubernetes/secrets/new">
                    <Button variant="secondary">Create New</Button>
                  </LinkContainer>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table responsive striped bordered size="sm">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {parameters.map(secret => {
                        return (
                          <tr key={secret.Name}>
                            <td className="align-middle">{secret.Name}</td>
                            <td className="align-middle">{secret.Type}</td>
                            <td className="align-middle">
                              <LinkContainer
                                to={{
                                  pathname: `/kubernetes/secrets/update/${encodeURIComponent(
                                    secret.Name
                                  )}`,
                                  state: { secret }
                                }}
                              >
                                <Button variant="outline-primary" size="sm">
                                  Update
                                </Button>
                              </LinkContainer>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
