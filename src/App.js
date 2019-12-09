import React, { Component } from 'react';

import Amplify, { Auth, Hub } from 'aws-amplify';
import { Navbar, Button } from 'react-bootstrap';
import awsconfig from './aws-exports'; // your Amplify configuration
import Routes from './Routes';
import './App.scss';

Amplify.configure(awsconfig);

class App extends Component {
  static async refresh() {
    const session = await Auth.currentSession();
    const user = await Auth.currentAuthenticatedUser();
    await user.refreshSession(session.getRefreshToken(), async () => {});
  }

  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    // let the Hub module listen on Auth events
    Hub.listen('auth', data => {
      switch (data.payload.event) {
        case 'signIn':
          this.setState({ authState: 'signedIn', authError: null });
          break;
        case 'signIn_failure':
        case 'customState_failure':
        case 'cognitoHostedUI_failure':
          this.setState({
            authState: 'signIn'
          });
          break;
        default:
          break;
      }
    });
    this.state = {
      authState: 'loading',
      authError: null,
      preferredUsername: null
    };
  }

  componentDidMount() {
    // check the current user when the App component is loaded
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.setState({
          authState: 'signedIn',
          preferredUsername:
            user.signInUserSession.idToken.payload.preferred_username
        });
      })
      .catch(e => {
        this.setState({ authState: 'signIn', authError: e });
      });
  }

  signOut() {
    Auth.signOut().then(() => {
      this.setState({ authState: 'signIn' });
    });
  }

  render() {
    const { authState, authError, preferredUsername } = this.state;

    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="/">
            <img
              style={{ marginRight: 10 }}
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            DVLA Cloud Platform
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {authState === 'loading' && <div>loading...</div>}
            {authState === 'signIn' && (
              <Button onClick={() => Auth.federatedSignIn()}>logon</Button>
            )}
            {authState === 'signedIn' && (
              <>
                <Navbar.Text>{preferredUsername}</Navbar.Text>
                <Button onClick={this.refresh}>refresh</Button>
                <Button onClick={this.signOut}>Sign out</Button>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>

        <div className="App">{authState === 'signedIn' && <Routes />}</div>
        <div className="debug">{authError}</div>
      </>
    );
  }
}

export default App;
