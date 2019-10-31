import React, { Component } from "react";
import "./faceCard.css";
import { Button } from "reactstrap";
import apimanager from "../../modules/apimanager";
import FaceShape from "../../images/faceshape.png";
import "./faceCard.css";

export default class FaceCard extends Component {
  addFace = () => {
    let saveFace = {
      headShapeId: this.props.headShape.id
    };
    apimanager
      .patch("users", saveFace, sessionStorage.getItem("credentials"))
      .then(response => response);
  };

  render() {
    console.log(this.headShapes, "here's the headShapes");
    return (
      <div id="faceShapeContainer">
        <div id="faceshapeImage">
          <img src={FaceShape} alt="face shape" />
        </div>
        <div id="faceDetails">
          <p>{this.props.headShape.id}</p>
          <p>{this.props.headShape.name}</p>
          <Button type="button" onClick={this.addFace}>
            Select Face
          </Button>
        </div>
      </div>
    );
  }
}
