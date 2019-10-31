import React, { Component } from "react";
import { Button } from "reactstrap";
import apimanager from "../../modules/apimanager";
import FaceShape from "../../images/faceshape.png";

export default class DisplayCard extends Component {
  showFace = () => {
    let showFace = {
      headShapeId: this.props.headShape.id
    };
    apimanager
      .getHeadShot("users", showFace, sessionStorage.getItem("credentials"))
      .then(response => response);
  };

  render() {
    console.log(this.headShapes, "here's the faceDisplay");
    return (
      <div id="faceShapeContainer">
        <div id="faceshapeImage">
          <img src={FaceShape} alt="face shape" />
        </div>
        <div id="faceDetails">
          <p>{this.props.headShape.id}</p>
          <p>{this.props.headShape.name}</p>
        </div>
      </div>
    );
  }
}
