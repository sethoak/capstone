import React from "react";
import Head1 from "../images/squareHead_use.png";
import Head2 from "../images/ovalHead_use.png";
import Head3 from "../images/rectangleHead_use.png";
import TryGlasses from "../images/oakleyglasses_small.png";
import "./child.css";
import ProductList from "../scripts/products/productList";
import UserPic from "../images/user1_small.png";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      currentGlassesURL: ""
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.setGlassesURL = this.setGlassesURL.bind(this);
  }

  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }

  setGlassesURL(currentGlassesURL) {
    console.log(currentGlassesURL, "glassesURL?");
    this.setState({ currentGlassesURL });
    /* this.setState(function({currentGlassesURL}) {
      console.log(glassesURL.currentGlassesURL, "glassesURL?");
      return { currentGlassesURL: glassesURL };
    }); */
  }

  // shouldComponentUpdate() {
  //   const differentImage = this.props.currentGlassesURL !== "";
  //   return differentImage;
  // }

  render() {
    if (this.state.visibility) {
      return (
        <div id="headContainer">
          <div id="alignment">
            <img src={UserPic} />
            <img src={this.state.currentGlassesURL} id="thisIsIt"/>
            <button onClick={this.toggleVisibility} id="clearButton">Clear Head</button>
            <ProductList setGlassesURLCB={this.setGlassesURL} />
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div id="faceWrapper">
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
            <div>
              <img src={UserPic} />
              <img src={this.props.currentGlassesURL} />
              <button onClick={this.toggleVisibility}>
                Select User Picture
              </button>
            </div>
            {/*ENDS faceWrapper div*/}
          </div>
        </>
      );
    }
  }
}

export default MyComponent;
