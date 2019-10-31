import React, { Component } from "react";
import "./faceCard.css";
import { Button } from "reactstrap";
import apimanager from "../../modules/apimanager";
import FaceShape from "../../images/faceshape.png";

export default class FaceCard extends Component {
  addFace = () => {
    let saveFace = {
      userId: sessionStorage.getItem("credentials"),
      name: this.props.headShapes.name,
      id: this.props.headShapes.id
    };
    apimanager.post("users", saveFace).then(response => response);
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
        </div>
      </div>
    );
  }
}
