import React, { Component } from 'react';

export default class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <div className="container-fluid">
          <h1 data-testid="title" className="h3 mb-4 text-gray-800">
            Dashboard
          </h1>
        </div>
      </>
    );
  }
}
