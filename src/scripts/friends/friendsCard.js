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
              top
              width="100%"
              src="../../images/1.jpg"
              alt="Card image cap"
            />
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">{this.props.friend.user.username}</CardTitle>
              <Button>Curse 'em!</Button>
            </CardBody>
          </Card>
      </div>
    );
  }
}
