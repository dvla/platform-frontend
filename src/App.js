// App.js
import React, { Component } from 'react';
import './App.scss';
import Amplify, { Auth, Hub} from 'aws-amplify';
import { withOAuth } from 'aws-amplify-react';
import { Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import awsconfig from './aws-exports'; // your Amplify configuration

Amplify.configure(awsconfig);


class App extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    // let the Hub module listen on Auth events
    Hub.listen('auth', (data) => {
        switch (data.payload.event) {
            case 'signIn':
                this.setState({authState: 'signedIn', authData: data.payload.data});
                break;
            case 'signIn_failure':
                this.setState({authState: 'signIn', authData: null, authError: data.payload.data});
                break;
            default:
                break;
        }
    });
    this.state = {
      authState: 'loading',
      authData: null,
      authError: null
    }
  }

  componentDidMount() {
    console.log('on component mount');
    // check the current user when the App component is loaded
    Auth.currentAuthenticatedUser().then(user => {
      console.log(user);
      this.setState({authState: 'signedIn'});
    }).catch(e => {
      console.log(e);
      this.setState({authState: 'signIn'});
    });
  }

  signOut() {
    Auth.signOut().then(() => {
      this.setState({authState: 'signIn'});
    }).catch(e => {
      console.log(e);
    });
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
    {' DVLA Cloud Platform'}
    </Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
  <Navbar.Text>
nbob

  </Navbar.Text>
</Navbar.Collapse>
</Navbar>



          <div className="App">
            {authState === 'loading' && (<div>loading...</div>)}
            {authState === 'signIn' && <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button>}
            {authState === 'signedIn' && <button onClick={this.signOut}>Sign out</button>}
          </div>

      </>

    );
  }
}

export default withOAuth(App);