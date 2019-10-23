import React, { Component } from "react";
import ProductCard from "./productCard";
import API from "../../modules/apimanager";

export default class ProductList extends Component {
  state = {
    sunglasses: [],
    products: []
  };

  componentDidMount() {
    console.log("sunglasses list");
    API.getAll().then(sunglasses => {
      this.setState({
        sunglasses: sunglasses
      });
    });
  }

  render() {
    return (
      <div className="sunglassContainer">
        {this.state.products.map(product => (
          <ProductCard />
        ))}
      </div>
    );
  }
}
