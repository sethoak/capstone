import React, { Component } from "react";

export default class ResultCard extends Component {
  state = {
    name: ""
  };

  render() {
    console.log(
      "is it grabbing the sunglasses ID?",
      this.props.productSelected
    );
    return (
      <div id="productSelectedContainer">
        <div id="productDetails">
          <p>{this.props.productSelected.id}</p>
          <p>{this.props.productSelected.name}</p>
        </div>
      </div>
    );
  }
}
