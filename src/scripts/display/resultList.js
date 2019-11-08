import React, { Component } from "react";
import ResultCard from "./resultCard";
import API from "../../modules/apimanager";

export default class ResultList extends Component {
  state = {
    products: {}
  };

  showSelection = () => {
    API.getHeadShotID("products", this.state.products.id).then(response => {
      this.setState({
        name: response
      });
    });
  };

  componentDidMount = () => {
    console.log("head state products?");

    API.getHeadShot(sessionStorage.getItem("credentials")).then(user => {
      this.setState(
        {
          products: user
        },
        this.showSelection()
      );
    });
  };

  render() {
    return (
      <>
        <div id="selectHead">
          <h3>DISPLAY AREA</h3>
        </div>
        <div id="wrapper">
          <div className="headShapeContainer">
            <DisplayCard
              key={this.state.headShapes.id}
              headShape={this.state.headShapes}
            />
          </div>
          <div id="sunglassResultContainer">
            <ResultCard
              key={this.state.products.id}
              productSelected={this.state.products}
            />
          </div>
        </div>
      </>
    );
  }
}
