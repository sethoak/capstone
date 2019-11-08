import React, { Component } from "react";
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
    console.log("is it grabbing the ID?", this.props.headShape.id);
    return (
      <div id="faceShapeContainer">
        <div id="faceDetails">
          <p>{this.props.headShape.headShapeId}</p>
          <p>{this.props.headShape.username}</p>
          <img src={this.props.headShape.userPic} />
        </div>
      </div>
    );
  }
}
