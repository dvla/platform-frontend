import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>

        <Container>

          <h1> new home </h1>
        </Container>
      </div>
    );
  }
}
