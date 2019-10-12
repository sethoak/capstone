import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./message.css";

export default class MessageCard extends Component {
  state = {
    userCard: ""
  };

  checkUser() {
    if (
      parseInt(sessionStorage.getItem("credentials")) ===
      this.props.message.userId
    ) {
      this.setState({
        userCard: true,
      });
    } else {
      this.setState(
        {
          userCard: false,
        },
      );
    }
  }

  componentDidMount() {
    this.checkUser();
  }

  render() {
    return (
      <>
        {this.state.userCard ? (
          <div className="mainMessageContainer">
            <div className="messageEntry">
              <div className="arrow bottom right"></div>
              <h5>{this.props.message.user.username}</h5>
              <p>{this.props.message.text}</p>
              <p>{this.props.message.date}</p>
              <button type="button" onClick={() => this.props.history.push(`/chat/${this.props.currentUser}/edit`)}>Edit</button>
              <div className="speech-bubble-ds-arrow"></div>
            </div>
          </div>
        ) : (
          <div className="mainMessageContainer">
            <div className="messageEntry">
              <div className="arrow bottom right"></div>
              <h5>{this.props.message.user.username}</h5>
              <p>{this.props.message.text}</p>
              <p>{this.props.message.date}</p>
              <div className="speech-bubble-ds-arrow"></div>
            </div>
          </div>
        )}
      </>
    );
  }
}
