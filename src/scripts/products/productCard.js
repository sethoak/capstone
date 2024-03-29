import React, { Component } from "react";
import "./productCard.css";
import { Button } from "reactstrap";
// import Image from "../../images/oakleyglasses_small.png";
// import Small1 from "../../images/small1.png";
import Small2 from "../../images/small2.png";
import Small3 from "../../images/small3.png";
import Store from "../../images/storeLocator.png";
import Sunglasses from "../../images/trySunglasses.png";
import apimanager from "../../modules/apimanager";
// import Holbrook from "../../images/holbrook_mainImage_small.png";

export default class ProductCard extends Component {
  constructor() {
    super();

    this.state = {
      currentGlassesURL: ""
    };
  }

  addFavorite = () => {
    let saveGlasses = {
      userId: sessionStorage.getItem("credentials"),
      title: this.props.product.name,
      sunGlassesId: this.props.product.id
    };
    apimanager.post("userSunglasses", saveGlasses).then(response => response);
  };

  // putOnGlasses(glassesID) {
  //   this.setState({
  //     currentGlassesURL: getGlassesImages(glassesID)
  //   });
  // }

  render() {
    return (
      <div id="wrapper">
        <div id="column1">
          <div className="innerNav">
            <ul className="innerNavList">
              <li>Oakley</li>
              <ul>
                <li>prizm</li>
                <li>holbrook</li>
                <li>clifden</li>
              </ul>
            </ul>
            {/*ENDS innerNav div*/}
          </div>
          {/*ENDS column1*/}
        </div>

        <div id="column2">
          <div id="breadCrumbs">
            <p>
              {this.props.product.manufacture}>{this.props.product.name}
            </p>
            {/*ENDS breadCrumbs div*/}
          </div>
          <div id="mainAreaContainer">
            <div id="titleDescription">
              <div id="title">
                <h4>{this.props.product.name}</h4>
                {/*ENDS title div*/}
              </div>
              <div id="description">
                <p>{this.props.product.description}</p>
                {/*ENDS description div*/}
              </div>
              <div id="details">
                <ul>
                  <li>face shape: {this.props.product.faceShape}</li>
                  <li>uses: {this.props.product.uses}</li>
                  <li>weight: {this.props.product.weight}</li>
                  <li>color: {this.props.product.color}</li>
                </ul>
                {/*ENDS details div*/}
              </div>
              {/*ENDS titleDescription div*/}
            </div>
            <div id="mainImage">
              <picture>
                <img src={this.props.product.mainImage} />
              </picture>
              {/*ENDS mainImage div*/}
            </div>
            {/*ENDS mainAreaContainer div*/}
          </div>
          <div id="mainFooter">
            <div id="tryThem">
              <p>
                TRY THEM ON{" "}
                <img
                  src={Sunglasses}
                  onClick={() =>
                    this.props.setGlassesURLCB(
                      this.props.product.sunglassesImageSelection
                    )
                  }
                />
              </p>
              {/*ENDS try div*/}
            </div>
            <div id="storeLocator">
              <p>
                <a>
                  STORE LOCATOR <img src={Store} />
                  <div>
                    <ul>
                      <li>
                        <a href="http://google.com" target="_blank">
                          Nashville
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="http://google.com" target="_blank">
                          Green Hills
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </p>
              {/*ENDS storeLocator div*/}
            </div>
            <div id="save">
              <Button type="button" onClick={this.addFavorite}>
                {" "}
                SAVE{" "}
              </Button>
            </div>
            {/*ENDS mainFooter div*/}
          </div>
          {/*ENDS column2 div*/}
        </div>

        <div id="column3">
          <div id="sidePictures">
            <ul id="smallSidePictures">
              <li>
                <img src={this.props.product.sunglassesImageSelection} />
              </li>
              <li>
                <img src={this.props.product.sideImage2} />
              </li>
              <li>
                <img src={this.props.product.sideImage3} />
              </li>
            </ul>
            {/*ENDS sidePictures div*/}
          </div>
          {/*ENDS column3 div*/}
        </div>

        {/*ENDS wrapper div*/}
      </div>
    );
  }
}
