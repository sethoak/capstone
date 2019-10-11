import React, { Component } from "react"
import APIManager from "../../modules/apimanager"
import "./message.css"

export default class MessageCard extends Component {
    state = {
        user:""
    }


    getData = () => {
        APIManager.get("users", this.props.message.userId)
        .then(user => this.setState({
            user: user
        }))
    }

    componentDidMount(){
        this.getData()
    }

    render() {
        return (
            <div className="mainMessageContainer">
                <div className="messageEntry">
                    <div className="arrow bottom right"></div>
                    <h5>{this.state.user.username}</h5>
                    <p>{this.props.message.text}</p>
                    <p>{this.props.message.text}</p>
                    <div class="speech-bubble-ds-arrow"></div>
                </div>
            </div>
        )
    }
}