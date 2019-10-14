import React, { Component } from "react";
import "./message.css"
import { Link } from "react-router-dom";
import {
  CardBody,
  CardTitle,
  Button,
  Card,
  CardText,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
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
            <Card className="messageEntry">
              <CardBody className="arrow bottom right">
              <CardTitle>{this.props.message.user.username}</CardTitle>
              <CardText>{this.props.message.text}</CardText>
              <CardText>{this.props.message.date}</CardText>
              <Button type="button" color="primary" onClick={() => this.props.history.push(`/chat/${this.props.message.id}/edit`)}>Edit</Button>
              </CardBody>
              <div className="speech-bubble-ds-arrow"></div>
            </Card>
          </div>
        ) : (
          <div className="mainMessageContainer">
            <Card className="messageEntry">
              <CardBody className="arrow bottom right">
              <CardTitle>{this.props.message.user.username}</CardTitle>
              <CardText>{this.props.message.text}</CardText>
              <CardText>{this.props.message.date}</CardText>
              </CardBody>
              <div className="speech-bubble-ds-arrow"></div>
            </Card>
          </div>
        )}
      </>
    );
  }
}
