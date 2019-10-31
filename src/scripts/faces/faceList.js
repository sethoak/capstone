import React, { Component } from "react";
import FaceCard from "./faceCard";
import "./faceCard.css";
import API from "../../modules/apimanager";

export default class FaceList extends Component {
  state = {
    headShapes: []
  };

  componentDidMount = () => {
    API.getAll("headShapes").then(headShapes => {
      this.setState({
        headShapes: headShapes
      });
    });
  };

  render() {
    console.log("is it working?");
    return (
      <div className="headShapeContainer">
        {this.state.headShapes.map(headShape => (
          <FaceCard key={headShape.id} headShape={headShape} />
        ))}
      </div>
    );
  }
}
