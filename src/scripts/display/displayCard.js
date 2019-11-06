import React, { Component } from "react";
import { Button } from "reactstrap";
import apimanager from "../../modules/apimanager";
import FaceShape from "../../images/faceshape.png";
import "./displayList.css";

export default class DisplayCard extends Component {
  state = {
    name: ""
  };

  // componentDidMount = () => {
  //   console.log("getting the id?", this.props.headShape);
  //   apimanager
  //     .getHeadShotID("users", this.props.headShape.headShape.id)
  //     .then(response => {
  //       console.log("the response?", response);
  //       this.setState({
  //         name: response.headShape.name
  //       });
  //     });
  // };

  render() {
    return (
      <div id="faceShapeWrapper">
        <div id="faceShapeContainer">
          <div id="faceshapeImage">
            <img src={FaceShape} alt="face shape" />
            <p>pupup</p>
          </div>
          <div id="faceDetails">
            <p>{this.props.headShape.headShapeId}</p>
            <p>pupup</p>
          </div>
        </div>
      </div>
    );
  }
}
