import React from "react";
import Head1 from "../images/faceshape.png";
import Head2 from "../images/head2.jpg";
import Head3 from "../images/faceshape3.png";
import "./child.css";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <div id="headContainer">
          <div>
            <img src={Head1} />
            <button onClick={this.toggleVisibility}>Clear Head</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <img src={Head1} />
          <button onClick={this.toggleVisibility}>Select Head One</button>
          <img src={Head2} />
          <button onClick={this.toggleVisibility}>Select Head Two</button>
          <img src={Head3} />
          <button onClick={this.toggleVisibility}>Select Head Three</button>
        </div>
      );
    }
  }
}

export default MyComponent;
