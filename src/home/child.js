import React from "react";
import Head1 from "../images/faceshape.png";

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
        <div>
          <img src={Head1} />
          <button onClick={this.toggleVisibility}>Clear Head</button>
        </div>
      );
    } else {
      return (
        <div>
          <img src={Head1} />
          <button onClick={this.toggleVisibility}>Select Head One</button>
        </div>
      );
    }
  }
}

export default MyComponent;
