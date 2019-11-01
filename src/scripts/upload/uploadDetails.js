import React, { Component } from "react";
import APIManager from "../../modules/apimanager";

export default class uploadDetails extends Component {
  state = {
    name: ""
  };

  componentDidMount() {
    APIManager.get(this.props.faceId).then(face => {
      this.setState({
        name: face.name
      });
    });
  }

  render() {
    return (
      <>
        <div className="card">
          <div className="card-content">
            <h3>
              Name:{" "}
              <span style={{ color: "darkslategrey" }}>{this.state.name}</span>
            </h3>
          </div>
        </div>
      </>
    );
  }
}
