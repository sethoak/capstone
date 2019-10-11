import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddEditButton extends Component {
  render() {
    if (this.props.message.userId === this.props.user.id) {
      return (
        <Link to="/chat/:messageId(\d+)/edit">
          <button type="button">Edit</button>
        </Link>
      );
    } else {
      return <div></div>;
    }
  }
}
