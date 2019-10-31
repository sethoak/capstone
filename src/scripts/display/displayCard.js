import React, { Component } from "react";
import { Button } from "reactstrap";
import apimanager from "../../modules/apimanager";
import FaceShape from "../../images/faceshape.png";

export default class DisplayCard extends Component {
  state = {
    name: ""
  };
  showFace = () => {
    apimanager
      .getHeadShotID("users", this.props.headShape.id)
      .then(response => {
        this.setState({
          name: response
        });
      });
  };

  render() {
    return (
      <div id="faceShapeContainer">
        <div id="faceshapeImage">
          <img src={FaceShape} alt="face shape" />
        </div>
        <div id="faceDetails">
          <p>{this.props.headShape.id}</p>
          <p>{this.name}</p>
        </div>
      </div>
    );
  }
}
