import React, { Component } from 'react';

export default class Secrets extends Component {
  componentDidMount() {}

  render() {
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
        </div>
      </>
    );
  }
}
