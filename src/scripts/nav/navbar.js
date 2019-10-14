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
        <div id="headerimage">
          <h1 className="site-title">
            HEXBook
            <br />
            <small>Connect with your fellow witches</small>
          </h1>
        </div>
        <nav>
          <ul className="container">
            {this.props.user ? (
              <li>
                <Link className="nav-link" to="/">
                  Home
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
                  Coven
                </Link>
              </li>
            ) : (
              <Redirect to="/login" />
            )}
            {this.props.user ? (
              <>
                <li>
                  <Link className="nav-link" to="/chat">
                    Chat
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/news">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/tasks">
                    Tasks
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/events">
                    Gatherings
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
