import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneDeparture,
  faUserSecret,
  faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faBitbucket,
  faDocker,
  faSimplybuilt
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  componentDidMount() {}

  render() {
    return (
      <ul
        className="navbar-nav bg-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          to="/"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-icon">
            <img
              alt=""
              src="/logo.svg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </div>
          <div className="sidebar-brand-text mx-3">Platform</div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faTachometerAlt} fixedWidth />
            <span className="pl-md-2">Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider mt-md-3 d-none d-md-block" />
        <div className="sidebar-heading">Kubernetes</div>
        <li className="nav-item">
          <Link to="/kubernetes/deployment" className="nav-link">
            <FontAwesomeIcon icon={faPlaneDeparture} fixedWidth />
            <span className="pl-md-2">Deployment</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/kubernetes/secrets" className="nav-link">
            <FontAwesomeIcon icon={faUserSecret} fixedWidth />
            <span className="pl-md-2">Secrets</span>
          </Link>
        </li>
        <hr className="sidebar-divider mt-md-3 d-none d-md-block" />
        <div className="sidebar-heading">tooling</div>
        <li className="nav-item">
          <Link to="/drone" className="nav-link">
            <FontAwesomeIcon icon={faSimplybuilt} fixedWidth />
            <span className="pl-md-2">Drone</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/bitbucket" className="nav-link">
            <FontAwesomeIcon icon={faBitbucket} fixedWidth />
            <span className="pl-md-2">Bitbucket</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/docker" className="nav-link">
            <FontAwesomeIcon icon={faDocker} fixedWidth />
            <span className="pl-md-2">Docker Registry</span>
          </Link>
        </li>
      </ul>
    );
  }
}
