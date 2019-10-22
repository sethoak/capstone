import React, { Component } from "react";
import "./home.css";
import Logo from "../images/mainSlogan.PNG";

class Home extends Component {
  render() {
    return (
      <>
        <div id="wrapper">
          <div id="col1">
            <div class="nav">
              <ul>
                <li>HOME</li>
                <li>info</li>
                <li>about</li>
                <li>buy</li>
              </ul>
            </div>
          </div>
          <div id="col2">
            <div id="slogan">
              <picture>
                <img src={Logo} />
              </picture>
            </div>
          </div>
          <div id="col3">
            <div id="login">
              <p>login / register</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
