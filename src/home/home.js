import React, { Component } from "react";
import "./home.css";
import Logo from "../images/mainSlogan.PNG";
import MainFooter from "../images/mainFooter.PNG";
import Gal from "../images/gal.PNG";
import Try from "../images/tryBefore.PNG";
import FaceShape from "../images/faceshape.png";

class Home extends Component {
  render() {
    return (
      <>
        <div id="wrapper1">
          <div id="col1">
            <div class="nav">
              <ul>
                <li className="active">HOME</li>
                <li>info</li>
                <li>about</li>
                <li>buy</li>
              </ul>
              {/*ENDS nav div*/}
            </div>
            {/*ENDS col1 div*/}
          </div>
          <div id="col2">
            <div id="slogan">
              <picture>
                <img src={Logo} />
              </picture>
              {/*ENDS slogan div*/}
              <div id="mainFooter">
                <div id="icons">
                  <div id="mainPic">
                    <picture>
                      <img src={MainFooter} />
                    </picture>
                  </div>
                  <div id="galPic">
                    <picture>
                      <img src={Gal} />
                    </picture>
                    {/*ENDS galPic div*/}
                  </div>
                  {/*ENDS mainFooter div*/}
                </div>
                {/*ENDS icons div*/}
              </div>
            </div>
            {/*ENDS col2 div*/}
          </div>
          <div id="col3">
            <div id="login">
              <p>login / register</p>
              {/*ENDS login div*/}
            </div>
            {/*ENDS col3 div*/}
          </div>
          {/*ENDS wrapper div*/}
        </div>
        <div id="wrapper2">
          <div id="wrapper2pic">
            <picture>
              <img src={Try} />
            </picture>
            {/*ENDS wrapper2pic div*/}
          </div>
          {/*ENDS wrapper2 div*/}
        </div>
        <div id="wrapper3">
          <div id="wrapper3col1">
            <div class="nav">
              <ul>
                <li>home</li>
                <li>info</li>
                <li className="active">TRY</li>
                <li>buy</li>
              </ul>
              {/*ENDS nav div*/}
            </div>
            {/*ENDS wrapper3col1 div*/}
          </div>
          <div id="wrapper3col2">
            <div id="wrapper3content">
              <div id="selectHead">
                <h3>SELECT YOUR HEAD SHAPE</h3>
              </div>
              <ul id="headshapes">
                <li>
                  <img src={FaceShape} />
                </li>
                <li>
                  <img src={FaceShape} />
                </li>
                <li>
                  <img src={FaceShape} />
                </li>
              </ul>
            </div>
          </div>
          {/*ENDS wrapper3 div*/}
        </div>
      </>
    );
  }
}

export default Home;
