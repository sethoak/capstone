import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from '../../home/home'
import Login from '../login/login'
import UserForm from '../login/form'
export default class ApplicationViews extends Component {

    // isAuthenticated = () => localStorage.getItem("credentials") !== null

render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

            <Route exact path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />
            <Route path="/login/login-form" render={props => {
          return <UserForm {...props} />
        }} />


    </React.Fragment> ) }}