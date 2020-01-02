import React, { Component } from 'react';
import { API } from 'aws-amplify';

export default class Secrets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parameters: [],
      nextToken: ''
    };
  }

  async componentDidMount() {
    const data1 = await Secrets.getData();
    console.log(data1);

    this.setState({ parameters: data1.Parameters });
    this.setState({ nextToken: data1.NextToken });
  }

  static async getData() {
    const apiName = 'backend';
    const path = 'ssm/getParameters/cloud';
    return API.get(apiName, path);
  }

  render() {
    const { parameters, nextToken } = this.state;

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
          <p>data {JSON.stringify(parameters)}</p>
          <p>nextToken {nextToken}</p>
        </div>
      </>
    );
  }
}
