import React from "react";
import Head1 from "../images/faceshape.png";
import Head2 from "../images/head2.jpg";
import Head3 from "../images/faceshape3.png";
import TryGlasses from "../images/oakleyglasses_small.png";
import "./child.css";
import ProductList from "../scripts/products/productList";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      currentGlassesURL: ""
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }

  setGlassesURL = glassesURL => {
    console.log(glassesURL, "glassesURL?");
    this.setState({ currentGlassesURL: glassesURL });
  };

  render() {
    if (this.state.visibility) {
      return (
        <div id="headContainer">
          <div>
            <img src={Head1} />
            <img src={this.props.currentGlassesURL} />
            <button onClick={this.toggleVisibility}>Clear Head</button>
            <ProductList setGlassesURLCB={this.setGlassesURL} />
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div>
            <img src={Head1} />
            <img src={this.props.currentGlassesURL} />
            <button onClick={this.toggleVisibility}>Select Head One</button>
          </div>
          <div>
            <img src={Head2} />
            <img src={this.props.currentGlassesURL} />
            <button onClick={this.toggleVisibility}>Select Head Two</button>
          </div>
          <div>
            <img src={Head3} />
            <img src={this.props.currentGlassesURL} />
            <button onClick={this.toggleVisibility}>Select Head Three</button>
          </div>
        </>
      );
    }
  }
}

export default MyComponent;
