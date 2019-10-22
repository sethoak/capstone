import React, { Component } from "react";
import "./home.css";
import Logo from "../images/mainSlogan.PNG";
import MainFooter from "../images/mainFooter.PNG";
import Gal from "../images/gal.PNG";

class Home extends Component {
  render() {
    return (
      <>
        <div id="wrapper">
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
      </>
    );
  }
}

export default Home;
