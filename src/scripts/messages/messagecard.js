import React, { Component } from "react"
import "./message.css"

export default class MessageCard extends Component {
    render() {
        return (
            <div className="mainMessageContainer">
                <div>
                    <p>{this.props.message.text}</p>
                </div>
            </div>
        )
    }
}
