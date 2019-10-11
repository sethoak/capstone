import React, { Component } from "react";
import APIManager from "../../modules/apimanager";
import AddEditButton from "./editmessage";
import "./message.css";

export default class MessageCard extends Component {
  state = {
    user: ""
  };

  getData = () => {
    APIManager.get("users", this.props.message.userId).then(parsedUser =>
      this.setState({
        user: parsedUser.id
      })
    );
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <div className="mainMessageContainer">
          <div className="messageEntry">
            <div className="arrow bottom right"></div>
            <h5>{this.state.user.username}</h5>
            <p>{this.props.message.text}</p>
            <p>{this.props.message.date}</p>
            <div className="speech-bubble-ds-arrow"></div>
          </div>
          <div>
            {
              <AddEditButton
                key={this.state.user.id}
                user={this.state.user}
                message={this.props.message}
              />
            }
          </div>
        </div>
      </>
    );
  }
}
