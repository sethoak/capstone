import React, { Component } from "react";
import DisplayCard from "./displayCard";
import API from "../../modules/apimanager";

export default class DisplayList extends Component {
  state = {
    headShapes: {}
  };

  showFace = () => {
    API.getHeadShotID("users", this.state.headShapes.id).then(response => {
      this.setState({
        name: response
      });
    });
  };

  componentDidMount = () => {
    console.log("head state?");

    API.getHeadShot(sessionStorage.getItem("credentials")).then(user => {
      console.log("what's the user coming back as?", user);
      this.setState(
        {
          headShapes: user
        },
        this.showFace()
      );
    });
  };

  render() {
    return (
      <>
        <div id="selectHead">
          <h3>DISPLAY AREA</h3>
        </div>
        <div className="headShapeContainer">
          <DisplayCard
            key={this.state.headShapes.id}
            headShape={this.state.headShapes}
          />
        </div>
      </>
    );
  }
}
