import React, { Component } from "react";
import APIManager from "../../modules/apimanager";

class MessageEditForm extends Component {
  state = {
    currentUser: this.props.currentUser,
    loadingStatus: false,
    text: "",
    date: "",
    message: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingMessage = evt => {
    evt.preventDefault();
    let timestamp = Date.now(); // This would be the timestamp you want to format
    let dateNow = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(timestamp);
    this.setState({ loadingStatus: true });
    const editedMessage = {
      text: this.state.text,
      userId: this.state.currentUser,
      date: dateNow
    };
    APIManager.putMessage("messages", this.state.message.id, editedMessage).then(this.props.history.push("/"))
    .then(this.props.history.push("/chat"))
  };

  componentDidMount() {
    APIManager.get("messages", this.props.match.params.messageId).then(
      message => {
        this.setState({
          text: message.text,
          date: message.date,
          loadingStatus: false,
          message: message
        });
      }
    );
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div>
              <label htmlFor="title">Text</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="text"
                value={this.state.text}
              />
            </div>
            <div>
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingMessage}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default MessageEditForm;