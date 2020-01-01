import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="Home">
        <div className="container px-lg-5">
          <div className="row mx-lg-n5">
            <div className="col py-3 px-lg-5">
              <div className="card shadow h-100 py-2">
                <div className="card-body d-flex align-items-center">
                  <img
                    width="200"
                    alt=""
                    src="/big_logo.svg"
                    className="d-inline-block align-top"
                  />
                  <Col className="pl-5">
                    <Row>
                      <h3>DVLA Cloud Platform</h3>
                      <p className="lead">
                        If you require access please contact a member of the
                        Cloud Engineering team.
                      </p>
                    </Row>
                    <Row>
                      <Button onClick={() => Auth.federatedSignIn()}>
                        logon
                      </Button>
                    </Row>
                  </Col>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
