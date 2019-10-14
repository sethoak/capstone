import React, { Component } from "react";
import "./friend.css";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardBody,
  CardDeck,
  CardSubtitle,
  Button
} from "reactstrap";

export default class FriendCard extends Component {
  render() {
    console.log(this.props.friend.user.username);
    return (
      <div>
        <Card>
          <CardImg
            className="cardImg"
            src={require("./witchIcon.png")}
            alt="Card image cap"
          />
          <CardBody className="cardBody">
            <CardTitle className="cardTitle">
              {this.props.friend.user.username}
            </CardTitle>
            <Button color="primary">Curse 'em!</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
