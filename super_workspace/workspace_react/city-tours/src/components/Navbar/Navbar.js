import React, { Component } from "react";
import "./Navbar.scss";
// import logo from "../../logo.png";
import logo from "../../images/homelogo.png";

export default class Navbar extends Component {
  render() {
    const { favorPage, tours, favorTours } = this.props;

    return (
      <nav className="navbar">
        <img src={logo} alt="city tours logo" />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              home
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`nav-link ${favorPage ? null : "active"}`}
              onClick={tours}
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
