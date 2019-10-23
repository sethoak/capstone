import React, { Component } from "react";
import "./productCard.css";
import Image from "../../images/oakleyglasses_big.png";

export default class ProductCard extends Component {
  render() {
    console.log(this.props.product.id);
    return (
      <div id="wrapper">
        <div id="col1">
          <div className="innerNav">
            <ul>
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
          {/*ENDS col1*/}
        </div>

        <div id="col2">
          <div id="breadCrumbs">
            <p>OAKLEY > SNOWBOARD > MODEL X</p>
            {/*ENDS breadCrumbs div*/}
          </div>
          <div id="titleDescription">
            <div id="title">
              <h4>{this.props.product.title}</h4>
              {/*ENDS title div*/}
            </div>
            <div id="description">
              <p>{this.props.product.description}</p>
              {/*ENDS description div*/}
            </div>
            {/*ENDS titleDescription div*/}
          </div>
          <div id="mainImage">
            <picture>
              <img src={Image} />
            </picture>
            {/*ENDS mainImage div*/}
          </div>
          {/*ENDS col2 div*/}
        </div>

        <div id="col3">
          <div id="sidePictures">
            <ul>
              <li>model G</li>
              <li>model T</li>
              <li>model X</li>
            </ul>
            {/*ENDS sidePictures div*/}
          </div>
          {/*ENDS col3 div*/}
        </div>

        <div id="mainFooter">
          <div id="try">
            <p>TRY THEM ON</p>
            {/*ENDS try div*/}
          </div>
          <div id="storeLocator">
            <p>STORE LOCATOR</p>
            {/*ENDS storeLocator div*/}
          </div>
          {/*ENDS mainFooter div*/}
        </div>

        {/*ENDS wrapper div*/}
      </div>
    );
  }
}
