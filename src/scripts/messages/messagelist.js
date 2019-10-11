import APIManager from "../../modules/apimanager";
import React, { Component } from "react";
import MessageCard from "./messagecard";
// import { Link } from "react-router-dom"
import "./message.css";
import { Timestamp } from "react-timestamp";

export default class MessageList extends Component {
  state = {
    messages: [],
    message: ""
  };
  getData = () => {
    APIManager.getAll("messages").then(messages =>
      this.setState({
        messages: messages
      })
    );
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  newMessage = e => {
    let timestamp = Date.now(); // This would be the timestamp you want to format
    let dateNow = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(timestamp);
    // console.log("firing new article");
    if (sessionStorage.getItem("credentials") !== null) {
      let sessionUserId = parseInt(sessionStorage.getItem("credentials"));
      console.log(sessionUserId)
      let newMessage = {
        text: this.state.message,
        userId: sessionUserId,
        date: dateNow
      };
      APIManager.post("messages", newMessage)
        .then(() => this.props.history.push("/"))
        .then(() => this.props.history.push("/chat"));
    } else {
      let localUserId = parseInt(localStorage.getItem("credentials"));
      console.log(localUserId)
      let newMessage = {
        text: this.state.message,
        userId: localUserId,
        date: dateNow,
      };
      APIManager.post("messages", newMessage)
        .then(() => this.props.history.push("/"))
        .then(() => this.props.history.push("/chat"));
    }
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
        <div>
          <label className="messageLabel">Write a new Messages</label>
          <input
            id="message"
            type="text"
            onChange={this.handleFieldChange}
          ></input>
          <button type="button" onClick={this.newMessage}>
            Send
          </button>
          {this.state.messages.map(message => (
              console.log(message),
              (
                <MessageCard
                  key={message.id}
                  message={message}
                  messages={this.state.messages}
                  {...this.props}
                />
              )
            )
          )}
        </div>
      </>
    );
  }
}
