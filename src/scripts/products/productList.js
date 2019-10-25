import React, { Component } from "react";
import ProductCard from "./productCard";
import API from "../../modules/apimanager";

export default class ProductList extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    console.log("sunglasses list");
    API.getAll("products").then(products => {
      this.setState({
        products: products
      });
    });
  }

  render() {
    console.log("is it working?");
    return (
      <div className="sunglassContainer">
        {this.state.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
}
