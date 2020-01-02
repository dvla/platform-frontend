import React, { Component } from 'react';
import { API } from 'aws-amplify';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

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
    const path = 'ssm/getParameters/cloud';
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
              <Table responsive striped bordered size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {parameters.map(value => {
                    return (
                      <tr key={value.Name}>
                        <td>{value.Name}</td>
                        <td>{value.Type}</td>
                        <td>go</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
