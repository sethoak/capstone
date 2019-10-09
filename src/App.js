import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { all } from 'q';
import ApplicationViews from "./scripts/applicationViews/applicationviews";
import NavBar from "./scripts/nav/navbar";
import { Route, withRouter, Redirect} from "react-router-dom";

class App extends Component {
  state = {
    user: ""
  };

  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  setUser = authUser => {
    localStorage.setItem("credentials", JSON.stringify(authUser));
    this.setState({
      user: this.isAuthenticated()
    });
  };
  render() {
    return (
      <>
        <NavBar user={this.state.user} />
        <ApplicationViews user={this.state.user} setUser={this.setUser} />
      </>
    );
  }
}

export default App;
