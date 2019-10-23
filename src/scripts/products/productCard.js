import React, { Component } from "react";
import "./productCard.css";

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
                p>OAKLEY > SNOWBOARD > MODEL X</p>
            {/*ENDS breadCrumbs div*/}
            </div>
            <div id="titleDescription">
                <div id="title">
                    <h4>PRIZM SNOWGLASSES</h4>
                {/*ENDS title div*/}
                </div>
                <div id="description">
                    <p>
                        Prizm™ is a revolution in lens optics built on decades of color
                        science research. Prizm™ lenses provide unprecedented control of
                        light transmission resulting in colors precisely tuned to
                        maximize contrast and enhance visibility.
                    </p>
                    <p>
                        Light Transmission: 13% Light Conditions: Changing Conditions
                        Contrast: Increased Base Lens Color: Bronze
                    </p>
                {/*ENDS description div*/}
                </div>
            {/*ENDS titleDescription div*/}
            </div>
            <div id="mainImage">
                <picture>
                    <img src={}/>
                </picture>
            {/*ENDS mainImage div*/}
            </div>
            <div id="sideImage">
                <ul>
                    <li>Picture one</li>
                    <li>Picture two</li>
                    <li>Picture three</li>
                </ul>
            {/*Ends sideImage div*/}
            </div>
        {/*ENDS col2 div*/}
        </div>
        {/*ENDS wrapper div*/}
      </div>
    );
  }
}
