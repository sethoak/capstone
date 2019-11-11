import React, { Component } from "react";
import ProductCard from "./productCard";
import API from "../../modules/apimanager";

export default class ProductList extends Component {
  state = {
    products: [],
    imageURL: []
  };

  componentDidMount() {
    API.getAll("products").then(products => {
      this.setState({
        products: products
      });
    });

    // API.getGlassesImages("products").then(product => {
    //   this.setState({
    //     imageURL: sunglassesImageSelection
    //   });
    // });
  }

  render() {
    return (
      <div className="sunglassContainer">
        {this.state.products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            setGlassesURLCB={this.props.setGlassesURLCB}
            productImage={this.state.imageURL}
          />
        ))}
      </div>
    );
  }
}
