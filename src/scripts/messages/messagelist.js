import APIManager from "../../modules/apimanager";
import React, { Component } from "react";
import MessageCard from "./messagecard";
import "./message.css"

export default class MessageList extends Component {
  state = {
    messages: []
  };
  getData = () => {
    APIManager.getAll("messages").then(messages =>
      this.setState({
        messages: messages
      })
    );
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
        <div>
          <label className="messageLabel">Write a new Messages</label>
          <input type="text"></input>
          <button type="button">Send</button>
          {this.state.messages.map(message =>
            <MessageCard
              key={message.id}
              message={message}
              messages={this.state.messages}
              {...this.props}
            />
          )}
        </div>
      </>
    );
  }
}
