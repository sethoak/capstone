import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "../../home/home";
import Login from "../auth/login";
import UserForm from "../auth/registerForm";
import LoginForm from "../auth/loginForm";
import MessageList from "../messages/messagelist";
import NewsList from "../news/newslist";
import NewsForm from "../news/newsform"
import NewsEditForm from  "../news/editnewsform"
import MessageEditForm from  "../messages/editmessageform"
import EventsEditForm from "../events/editeventform"
import EventForm from "../events/eventform"
import EventsList from "../events/eventlist"
import TaskList from "../tasks/tasklist"
import TaskEditForm from "../tasks/taskeditform"
import TaskForm from "../tasks/taskform"
import FriendList from "../friends/friendsList"

export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  isRemebered = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <Home currentUser={this.props.currentUser} {...props}/>;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          exact
          path="/login"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <Login {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/login/register-form"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return (
                <UserForm
                  rememberMe={this.props.remeberMe}
                  setUser={this.props.setUser}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/login/login-form"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return (
                <LoginForm
                  rememberMe={this.props.rememberMe}
                  setUser={this.props.setUser}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/chat"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <MessageList currentUser={this.props.currentUser} {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/news"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <NewsList currentUser={this.props.currentUser} {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/news/new"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <NewsForm currentUser={this.props.currentUser} {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/news/:articleId(\d+)/edit"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <NewsEditForm currentUser={this.props.currentUser} {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/chat/:messageId(\d+)/edit"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <MessageEditForm currentUser={this.props.currentUser} {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
       <Route
          exact
          path="/events"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <EventsList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/events/new"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <EventForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/events/:eventId(\d+)/edit"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <EventsEditForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
          />
                <Route
          exact
          path="/tasks"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <TaskList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/tasks/new"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <TaskForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/tasks/:taskId(\d+)/edit"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <TaskEditForm {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
          />
                <Route
          exact
          path="/coven"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <FriendList currentUser={this.props.currentUser} {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
      </React.Fragment>
    );
  }
}
