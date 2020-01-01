import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Auth } from 'aws-amplify';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-router-dom/NavLink';
import Gravatar from 'react-gravatar';

export default class NavBar extends Component {
  componentDidMount() {}

  render() {
    const { user, email } = this.props;

    return (
      <Nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          type="button"
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </form>
        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block" />

          <NavDropdown
            className="no-arrow"
            title={
              <>
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  {user}
                </span>
                <Gravatar
                  email={email}
                  className="img-profile rounded-circle"
                />
              </>
            }
            id="userDropdown"
          >
            <NavLink className="dropdown-item" to="/profile">
              Profile
            </NavLink>
            <NavLink className="dropdown-item" to="/refresh">
              Refresh
            </NavLink>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="logout" onSelect={() => Auth.signOut()}>
              SignOut
            </NavDropdown.Item>
          </NavDropdown>
        </ul>
      </Nav>
    );
  }
}
