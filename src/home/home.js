import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./home.css";
import ProductList from "../scripts/products/productList";
import Logo from "../images/mainSlogan.PNG";
import MainFooter from "../images/mainFooter.PNG";
import Gal from "../images/gal.PNG";
import Try from "../images/tryBefore.PNG";
import FaceShape from "../images/faceshape.png";
import Upload from "../images/upload.PNG";
import Shades from "../images/selectShades.PNG";
import Brands from "../images/selectBrand.PNG";

class Home extends Component {
  render() {
    return (
      <>
        <div id="wrapper1">
          <div id="col1">
            <div className="nav">
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
                <img src={Logo} alt="Logo" />
              </picture>
              {/*ENDS slogan div*/}
              <div id="mainFooter">
                <div id="icons">
                  <div id="mainPic">
                    <picture>
                      <img src={MainFooter} alt="Main footer image" />
                    </picture>
                  </div>
                  <div id="galPic">
                    <picture>
                      <img src={Gal} alt="picture of girl" />
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
            <div className="nav">
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
                {/*ENDS selectHead div*/}
              </div>
              <ul id="headshapes">
                <li>
                  <img src={FaceShape} alt="face shape" />
                </li>
                <li>
                  <img src={FaceShape} alt="face shape" />
                </li>
                <li>
                  <img src={FaceShape} alt="face shape" />
                </li>
              </ul>
              {/*ENDS wrapper3content*/}
            </div>
            <div id="upload">
              <picture>
                <img src={Upload} alt="upload" />
              </picture>
            </div>
            {/*ENDS wrapper3col2 div*/}
          </div>
          {/*ENDS wrapper3 div*/}
        </div>
        <div id="wrapper4">
          <div className="nav">
            <ul>
              <li>home</li>
              <li>info</li>
              <li>TRY</li>
              <li>buy</li>
            </ul>
            {/*ENDS nav div*/}
          </div>
          <div id="shadeSelection">
            <picture>
              <img src={Shades} alt="shaes" />
            </picture>
          </div>
          {/*ENDS wrapper4 div*/}
        </div>
        <div id="wrapper5">
          <div id="selectBrand">
            <picture>
              <img src={Brands} alt="brands" />
            </picture>
          </div>
          {/*ENDS wrapper5 div */}
        </div>
        <div id="wrapper6">
          <div id="selection">
            <div id="innerMenu">
              <div className="nav">
                <ul>
                  <li>home</li>
                  <li>info</li>
                  <li>TRY</li>
                  <li>buy</li>
                </ul>
                {/*ENDS nav div*/}
              </div>
              <div id="productDisplay">
                <Card>
                  <ProductList />
                </Card>
                {/*ENDS productDisplay*/}
              </div>
              {/*ENDS innerMenu div*/}
            </div>
            {/*ENDS selection div*/}
          </div>
          {/*ENDS wrapper div*/}
        </div>
      </>
    );
  }
}

export default Home;
