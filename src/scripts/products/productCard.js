import React, { Component } from "react";
import "./productCard.css";
import { Button } from "reactstrap";
import Image from "../../images/oakleyglasses_small.png";
import Small1 from "../../images/small1.png";
import Small2 from "../../images/small2.png";
import Small3 from "../../images/small3.png";
import Store from "../../images/storeLocator.png";
import Sunglasses from "../../images/trySunglasses.png";

export default class ProductCard extends Component {
  addFavorite = () => {};
  render() {
    // console.log(this.props.product.id);
    return (
      <div id="wrapper">
        <div id="column1">
          <div className="innerNav">
            <ul className="innerNavList">
              <li>Oakley</li>
              <ul>
                <li>model X</li>
                <li>model T</li>
              </ul>
              <li>Gucci</li>
              <ul>
                <li>model G</li>
                <li>model K</li>
              </ul>
            </ul>
            {/*ENDS innerNav div*/}
          </div>
          {/*ENDS column1*/}
        </div>

        <div id="column2">
          <div id="breadCrumbs">
            <p>
              {this.props.product.name}>{this.props.product.name}
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
                <img src={Image} />
              </picture>
              {/*ENDS mainImage div*/}
            </div>
            {/*ENDS mainAreaContainer div*/}
          </div>
          <div id="mainFooter">
            <div id="try">
              <p>
                TRY THEM ON <img src={Sunglasses} />
              </p>
              {/*ENDS try div*/}
            </div>
            <div id="storeLocator">
              <p>
                STORE LOCATOR <img src={Store} />
              </p>
              {/*ENDS storeLocator div*/}
            </div>
            <div id="save">
              <Button
                type="button"
                onClick={() => this.addFavorite(this.state.product)}
              >
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
                <img src={Small1} />
              </li>
              <li>
                <img src={Small2} />
              </li>
              <li>
                <img src={Small3} />
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
