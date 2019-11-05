import React, { Component } from "react";
import { Button } from "reactstrap";
import apimanager from "../../modules/apimanager";
import FaceShape from "../../images/faceshape.png";

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
      <div id="faceShapeContainer">
        <div id="faceshapeImage">
          <img src={FaceShape} alt="face shape" />
        </div>
        <div id="faceDetails">
          <p>{this.props.headShape.id}</p>
          {this.props.headShape.name}
        </div>
      </div>
    );
  }
}
