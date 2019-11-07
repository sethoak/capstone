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
import Brands from "../images/selectBrand.PNG";
import OakleyGlasses from "../../src/images/oakleyglasses_small.png";
import Child from "./child";
import apimanager from "../modules/apimanager";
import FaceList from "../scripts/faces/faceList";
import Upload from "../images/upload.PNG";
import DisplayList from "../scripts/display/displayList";

class Home extends Component {
  // state = {
  //   sunglassSelection = {}
  // }

  saveFace = () => {
    let saveFaces = {
      id: this.props.faceShape.id,
      name: this.props.faceShape.name
    };
    apimanager.post("faceShapes", saveFaces).then(response => response);
  };

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
            </div>
            <div id="mainFooterHome">
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
                {/*ENDS icons div*/}
              </div>
              {/*ENDS mainFooter div*/}
            </div>
            {/*ENDS col2 div*/}
          </div>

          <div id="col3">
            <div id="login">
              <h5>login / register</h5>
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
              <Card>
                <FaceList />
              </Card>
              <div id="upload">
                <picture>
                  <img src={Upload} alt="upload" />
                </picture>
              </div>
              {/*ENDS wrapper3content*/}
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
            <div id="shadeSlogan">
              <h3>SELECT YOUR SHADES</h3>
              {/*ENDS shadeSlogan*/}
            </div>
            <div id="shadeColFlex">
              <div className="shadeCol">
                <ul>
                  <li>
                    <img src={OakleyGlasses} />
                    <p>Oakley Prizm Sunglasses</p>
                  </li>
                  <li>
                    <img src={OakleyGlasses} />
                    <p>Oakley Prizm Sunglasses</p>
                  </li>
                </ul>
                {/*ENDS shadeCol1*/}
              </div>
              <div className="shadeCol">
                <ul>
                  <li>
                    <img src={OakleyGlasses} />
                    <p>Oakley Prizm Sunglasses</p>
                  </li>
                  <li>
                    <img src={OakleyGlasses} />
                    <p>Oakley Prizm Sunglasses</p>
                  </li>
                </ul>
                {/*ENDS shadeCol1*/}
              </div>
              {/*ENDS shadeColFlex div*/}
            </div>
            {/* <picture>
              <img src={Shades} alt="shaes" />
            </picture> */}
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
          {/*ENDS wrapper6 div*/}
        </div>
        <div id="wrapper7">
          <DisplayList />
        </div>
        {/* <div>
          <Child />
        </div> */}
      </>
    );
  }
}

export default Home;
