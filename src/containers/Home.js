import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { LinkContainer } from 'react-router-bootstrap'
import Button from "react-bootstrap/Button";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>

        <Container>

        <Card>
        <Card.Header>Kubernetes Secrets</Card.Header>
        <Card.Body>
          <Card.Text>
            Kubernetes secret objects let you store and manage sensitive information, such as passwords, OAuth tokens, and ssh keys. Putting this information in a secret is safer and more flexible than putting it verbatim in a Pod definition or in a container image
          </Card.Text>
          <LinkContainer to="/kubernetes/secrets">
            <Button variant="primary">Create Kubernetes Secret</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
        </Container>
      </div>
    );
  }
}
