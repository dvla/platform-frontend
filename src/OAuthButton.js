// OAuthButton.js
import { withOAuth } from 'aws-amplify-react';
import React, { Component } from 'react';

class OAuthButton extends Component {
  render() {
    return (
      <button onClick={this.props.OAuthSignIn}>
        Sign in with AWS
      </button>
    )
  }
}

export default withOAuth(OAuthButton);