import React, { Component } from "react";
import "./child.css";

export default class Child extends Component {
  handleClick() {
    this.props.toggleChildBackground();
  }

  render() {
    return (
      <div id={this.props.defaultBackground ? "id1" : "id2"}>
        <button onClick={this.handleClick.bind(this)}>change background</button>
      </div>
    );
  }
}
