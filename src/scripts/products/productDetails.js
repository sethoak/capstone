import React, { Component } from "react";
import APIManager from "../../modules/apimanager";
import "./productCard.css";

export default class ProductDetails extends Component {
                 state = {
                   name: ""
                 };

                 componentDidMount() {
                   console.log("ProductDetails: ComponentDidMount");
                   APIManager.get(this.props.productId).then(product => {
                     this.setState({
                       name: product.name,
                     });
                   });
                 }

                 render() {
                   return (
                     <>
                       <div className="card">
                         <div className="card-content">
                           <h3>
                             Name:{" "}
                             <span style={{ color: "darkslategrey" }}>
                               {this.state.name}
                             </span>
                           </h3>
                         </div>
                       </div>
                     </>
                   );
                 }
               }
