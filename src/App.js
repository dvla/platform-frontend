// App.js
import React, { Component } from "react";
import "./App.scss";
import Amplify, { Auth, Hub } from "aws-amplify";
import { Navbar } from "react-bootstrap";
//import awsconfig from "./aws-exports"; // your Amplify configuration

import Routes from "./Routes";

//Amplify.configure(awsconfig);



async function refreshToken() {
    // refresh the token here and get the new token info
    // ......
    console.log('refresh token');
    const data = {
      token: 'token',
                      expires_at: 0,
                      accessToken: 'sdf'
        }
    return data;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    // let the Hub module listen on Auth events
    Hub.listen("auth", data => {
      console.log(data);
      switch (data.payload.event) {
        case "signIn":
          this.setState({ authState: "signedIn", authData: data.payload.data });
          break;
        case "signIn_failure":
        case "customState_failure":
        case "cognitoHostedUI_failure":
          this.setState({
            authState: "signIn",
            authData: null,
            authError: null
          });
          break;
        default:
          console.log(data.payload.event);
          break;
      }
    });
    this.state = {
      authState: "loading",
      authData: null,
      authError: null,
      preferred_username: null
    };
  }

  componentDidMount() {
    console.log("on component mount");
    // check the current user when the App component is loaded
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log(user);
        console.log(user.signInUserSession.idToken.payload.preferred_username);

        this.setState({
          authState: "signedIn",
          preferred_username:
            user.signInUserSession.idToken.payload.preferred_username
        });
      })
      .catch(e => {
        console.log(e);
        this.setState({ authState: "signIn" });
      });
  }

  signOut() {
    Auth.signOut()
      .then(() => {
        this.setState({ authState: "signIn" });
      })
      .catch(e => {
        console.log(e);
      });
  }
  async refresh(){
    const session = await Auth.currentSession()
    console.log(session);
    const user = await Auth.currentAuthenticatedUser()
    user.refreshSession(session.getRefreshToken(), async () => {
      console.log('refreshed auth session')
      const session = await Auth.currentSession()
    console.log(session);
    })
  }

  render() {
    const { authState } = this.state;
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" DVLA Cloud Platform"}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

            {authState === "loading" && <div>loading...</div>}
          {authState === "signIn" && (
            <button onClick={() => Auth.federatedSignIn()}>
              logon
            </button>
          )}
          {authState === "signedIn" && (
            <>
            <Navbar.Text>{this.state.preferred_username}</Navbar.Text>
            <button onClick={this.signOut}>Sign out</button>
            </>
          )}
          </Navbar.Collapse>
        </Navbar>

        <div className="App">

        <button onClick={this.refresh}>refresh</button>

        <Routes childProps={authState} />


        </div>
      </>
    );
  }
}

export default App;
