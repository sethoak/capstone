import React, { Component } from "react";
import APIManager from "../../modules/apimanager";

class EventsEditForm extends Component {
  state = {
    title: "",
    date: "",
    location: "",
    time: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingEvent = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedEvent = {
      id: this.props.match.params.eventId,
      title: this.state.title,
      date: this.state.date,
      location: this.state.location,
      time: this.state.time
    };

    APIManager.put("events", editedEvent).then(() =>
      this.props.history.push("/events")
    );
  };

  componentDidMount() {
    APIManager.get("events", this.props.match.params.eventId).then(
      event => {
        this.setState({
          title: event.title,
          date: event.date,
          location: event.location,
          time: event.time,
          loadingStatus: false
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
              <label htmlFor="title">Title</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="title"
                value={this.state.title}
              />
              <label htmlFor="date">Date</label>
              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />

              <label htmlFor="synopsis">Location</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="location"
                value={this.state.location}
              />

              <label htmlFor="URL">Time</label>
              <input
                type="time"
                required
                onChange={this.handleFieldChange}
                id="time"
                value={this.state.time}
              />
            </div>
            <div>
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingEvent}
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

export default EventsEditForm;
