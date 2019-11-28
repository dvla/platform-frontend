import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

export default class Secrets extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="Home">
        <Breadcrumb>
          <LinkContainer to="/">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </LinkContainer>
          <Breadcrumb.Item active>Kubernetes</Breadcrumb.Item>
          <Breadcrumb.Item active>Secrets</Breadcrumb.Item>
        </Breadcrumb>

        <Container />
      </div>
    );
  }
}
