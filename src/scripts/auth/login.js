import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/login/login-form">
          <button type="submit">Sign in</button>
        </Link>
        <Link to="/login/register-form">
          <button type="button">Register</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Login;
