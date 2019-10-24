import React, { Component } from "react";
import APIManager from "../../modules/apimanager";
import "./productCard.css";
import ProductList from "./productList";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default class ProductDetails extends Component {
  state = {
    name: ""
  };
  componentDidMount() {
    console.log("ProductDetails: ComponentDidMount");
    APIManager.get(this.props.product.id).then(product => {
      this.setState({
        name: product.name
      });
    });
  }

  render() {
    return (
      <>
        <Card>
          <ProductList key={product.id} product={product} />
        </Card>
      </>
    );
  }
}
