import APIManager from "../../modules/apimanager";
import React, { Component } from "react";
import MessageCard from "./messagecard";
import {
  CardBody,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
// import { Link } from "react-router-dom"
import "./message.css";

export default class MessageList extends Component {
  state = {
    messages: [],
    message: ""
  };
  getData = () => {
    console.log(this.props.currentUser);
    APIManager.getMessages(this.props.currentUser).then(messages =>
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
      console.log(sessionUserId);
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
      console.log(localUserId);
      let newMessage = {
        text: this.state.message,
        userId: localUserId,
        date: dateNow
      };
      APIManager.post("messages", newMessage)
        // .then(() => this.props.history.push("/"))
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
          <Card className="messageBox">
            <CardBody>
              <label className="messageLabel">Write a new Messages</label>
              <InputGroup>
                <InputGroupAddon type="append" addonType="append">
                  <InputGroupText>New Message:</InputGroupText>
                  <Input
                    className="messageInput"
                    id="message"
                    type="text"
                    onChange={this.handleFieldChange}
                  />
                </InputGroupAddon>
              </InputGroup>
              <button type="button" onClick={this.newMessage}>
                Send
              </button>
              {this.state.messages.map(message => (
                <MessageCard
                  key={message.id}
                  getData={this.getData}
                  currentUser={this.props.currentUser}
                  message={message}
                  messages={this.state.messages}
                  {...this.props}
                />
              ))}
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}
