import React, { Component } from "react";
import DisplayCard from "./displayCard";
import API from "../../modules/apimanager";

export default class DisplayList extends Component {
  state = {
    headShapes: []
  };

  componentDidMount = () => {
    API.getHeadShot(sessionStorage.getItem("credentials")).then(user => {
      this.setState({
        headShapes: user.headShapeId
      });
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
