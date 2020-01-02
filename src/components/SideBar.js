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
import { Link, NavLink } from 'react-router-dom';

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

        <li className="nav-item">
          <NavLink to="/dashboard" className="nav-link">
            <FontAwesomeIcon icon={faTachometerAlt} fixedWidth />
            <span className="pl-md-2">Dashboard</span>
          </NavLink>
        </li>
        <hr className="sidebar-divider mt-md-3 d-none d-md-block" />
        <div className="sidebar-heading">Kubernetes</div>
        <li className="nav-item">
          <NavLink to="/kubernetes/deployment" className="nav-link">
            <FontAwesomeIcon icon={faPlaneDeparture} fixedWidth />
            <span className="pl-md-2">Deployment</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/kubernetes/secrets" className="nav-link">
            <FontAwesomeIcon icon={faUserSecret} fixedWidth />
            <span className="pl-md-2">Secrets</span>
          </NavLink>
        </li>
        <hr className="sidebar-divider mt-md-3 d-none d-md-block" />
        <div className="sidebar-heading">tooling</div>
        <li className="nav-item">
          <NavLink to="/drone" className="nav-link">
            <FontAwesomeIcon icon={faSimplybuilt} fixedWidth />
            <span className="pl-md-2">Drone</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/bitbucket" className="nav-link">
            <FontAwesomeIcon icon={faBitbucket} fixedWidth />
            <span className="pl-md-2">Bitbucket</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/docker" className="nav-link">
            <FontAwesomeIcon icon={faDocker} fixedWidth />
            <span className="pl-md-2">Docker Registry</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}
