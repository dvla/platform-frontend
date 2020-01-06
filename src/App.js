import React, { Component } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports'; // your Amplify configuration
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Login from './views/login/Login';

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
        case 'signOut':
          this.setState({ authState: 'signIn' });
          break;
        case 'signIn':
          this.setState({ authState: 'signedIn', authError: null });
          this.checkUser();
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
      preferredUsername: null,
      email: null
    };
  }

  componentDidMount() {
    // check the current user when the App component is loaded
    this.checkUser();
  }

  checkUser() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.setState({
          authState: 'signedIn',
          group: user.signInUserSession.idToken.payload['cognito:groups'][0],
          preferredUsername:
            user.signInUserSession.idToken.payload.preferred_username,
          email: user.signInUserSession.idToken.payload.email
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
    const {
      authState,
      authError,
      preferredUsername,
      email,
      group
    } = this.state;

    return (
      <>
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavBar user={preferredUsername} email={email} group={group} />

              <div className="App">
                {authState === 'signedIn' && <Routes />}
              </div>
              <div className="App">{authState !== 'signedIn' && <Login />}</div>
              <div className="App">
                {authError && <p className="invisible">{authError}</p>}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
