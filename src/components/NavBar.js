import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Auth } from 'aws-amplify';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';

export default props => {
  const { user, email, group } = props;
  return (
    <Nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        type="button"
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block" />

        <NavDropdown
          className="no-arrow"
          title={
            <>
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                {user}
              </span>
              {email && (
                <Gravatar
                  email={email}
                  className="img-profile rounded-circle"
                />
              )}
            </>
          }
          id="userDropdown"
        >
          <div className="dropdown-item">Profile: {group}</div>
          <Link className="dropdown-item" to="/refresh">
            Refresh
          </Link>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="logout" onSelect={() => Auth.signOut()}>
            SignOut
          </NavDropdown.Item>
        </NavDropdown>
      </ul>
    </Nav>
  );
};
