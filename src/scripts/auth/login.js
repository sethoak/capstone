import React, { Component } from "react";
import { Link } from "react-router-dom";
import './login.css';

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/login/login-form">
          <button type="submit" className="signInBtn">Login</button>
        </Link>
        <Link to="/login/register-form">
          <button type="button" className="registerBtn">Register</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Login;
