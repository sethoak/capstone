import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <>
        <div className="spacer s0"></div>
        <div id="parallax1" className="parallaxParent">
          Try It Before You Buy It
        </div>
        <div className="spacer s1">
          <div className="box2 blue">
            <p>Text goes here</p>
          </div>
        </div>
        <div className="spacer s0"></div>
        <div id="parallax2" className="parallaxParent"></div>
        <div className="spacer s1">
          <div className="box2 blue">
            <p>Content 2</p>
            <a href="#" className="viewsource">
              view source
            </a>
          </div>
        </div>
        <div className="spacer s0"></div>
        <div id="parallax3" className="parallaxParent"></div>
        <div className="spacer s2"></div>
      </>
    );
  }
}

export default Home;
