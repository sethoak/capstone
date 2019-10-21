import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push("/");
  };

  render() {
    return (
      <header>
        <nav>
          <ul className="container">
            {this.props.user ? (
              <li>
                <Link className="nav-link" to="/">
                  home
                </Link>
              </li>
            ) : (
              <Redirect to="/login" />
            )}
            {/* {this.props.user ? (
              <li>
                <Link className="nav-link" to="/cauldron">
                  My Cauldron
                </Link>
              </li>
            ) : (
              <Redirect to="/login" />
            )} */}
            {this.props.user ? (
              <li>
                <Link className="nav-link" to="/coven">
                  info
                </Link>
              </li>
            ) : (
              <Redirect to="/login" />
            )}
            {this.props.user ? (
              <>
                <li>
                  <Link className="nav-link" to="/chat">
                    about
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/news">
                    try
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/tasks">
                    buy
                  </Link>
                </li>
                <li>
                  <span className="nav-link" onClick={this.handleLogout}>
                    Logout
                  </span>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(NavBar);
