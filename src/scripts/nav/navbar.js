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
          {/* <ul className="container">
            {this.props.user ? (
              <li>
                <Link className="nav-link" to="/">
                  home
                </Link>
              </li>
            ) : (
              <Redirect to="/login" />
            )}
            {this.props.user ? (
              <li>
                <Link className="nav-link" to="/info">
                  info
                </Link>
              </li>
            ) : (
              <Redirect to="/login" />
            )}
            {this.props.user ? (
              <>
                <li>
                  <Link className="nav-link" to="/about">
                    about
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/try">
                    try
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/buy">
                    buy
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" onClick={this.handleLogout}>
                    Logout
                  </Link>
                </li>
              </>
            ) : null}
          </ul> */}
        </nav>
      </header>
    );
  }
}

export default withRouter(NavBar);
