import React, { Component } from "react";
import ProductCard from "./productCard";
import API from "../../modules/apimanager";

export default class ProductList extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    API.getAll("products").then(products => {
      this.setState({
        products: products
      });
    });
  }

  render() {
    return (
      <div className="sunglassContainer">
        {this.state.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
}
