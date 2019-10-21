import React, { Component } from "react";
// import "../scripts/home/home";
// import "./home/home.css";

class Home extends Component {
  render() {
    return (
      <>
        <div className="spacer s0"></div>
        <div id="parallax1" className="parallaxParent">
          {/* <div style="background-image: url(../../assets/img/example_parallax_bg1.png);"></div> */}
        </div>
        <div className="spacer s1">
          <div className="box2 blue">
            <p>Content 1</p>
            <a href="#" className="viewsource">
              view source
            </a>
          </div>
        </div>
        <div className="spacer s0"></div>
        <div id="parallax2" className="parallaxParent">
          {/* <div style="background-image: url(../../assets/img/example_parallax_bg2.png);"></div> */}
        </div>
        <div className="spacer s1">
          <div className="box2 blue">
            <p>Content 2</p>
            <a href="#" className="viewsource">
              view source
            </a>
          </div>
        </div>
        <div className="spacer s0"></div>
        <div id="parallax3" className="parallaxParent">
          {/* <div style="background-image: url(../../assets/img/example_parallax_bg3.png);"></div> */}
        </div>
        <div className="spacer s2"></div>
      </>
    );
  }
}

export default Home;
