import React, { Component } from "react";
import "./event.css";
import { Button } from "reactstrap";

class EventsCard extends Component {
  render() {
    console.log("renderingggg");
    return (
      <div className="eventsContainer">
        <p className="sectionTitle">
          <b>
            <u>Title:</u>
          </b>
        </p>
        <p>{this.props.event.title}</p>
        <p className="sectionTitle">
          <b>
            <u>Date:</u>
          </b>
        </p>
        <p>{this.props.event.date}</p>
        <p className="sectionTitle">
          <b>
            <u>location:</u>
          </b>
        </p>
        <p>{this.props.event.location}</p>
        <p className="sectionTitle">
          <b>
            <u>Time:</u>
          </b>
        </p>
        <p>{this.props.event.time}</p>
        <div className="eventsButtons">
          <Button
            type="deleteEventsbutton"
            color="danger"
            onClick={() => this.props.deleteEvent(this.props.event.id)}
          >
            Delete
          </Button>
          <Button
            type="editEventsbutton"
            color="warning"
            onClick={() => {
              this.props.history.push(`/events/${this.props.event.id}/edit`);
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    );
  }
}

export default EventsCard;
