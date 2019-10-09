import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from '../../home/home'
import Login from '../auth/login'
import UserForm from '../auth/registerForm'
import LoginForm from '../auth/loginForm'

export default class ApplicationViews extends Component {

    // isAuthenticated = () => localStorage.getItem("credentials") !== null

render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

            <Route exact path="/login" render={props => {
          return <Login {...props} />
        }} />
            <Route exact path="/login/register-form" render={props => {
          return <UserForm setUser={this.props.setUser} {...props} />
        }} />
          <Route exact path="/login/login-form" render={props => {
          return <LoginForm setUser={this.props.setUser} {...props} />
        }} />


    </React.Fragment> ) }}