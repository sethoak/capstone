import React, { Component } from "react";
import APImanager from "../../modules/apimanager";
import EventsCard from "../../scripts/events/eventcard";
import { Button } from "reactstrap";
import "./event.css";

class EventsList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    console.log("NEWS LIST: ComponentDidMount");
    this.getData();
  }

  getData = () => {
    APImanager.getAll("events").then(events => {
      console.log("am I getting events", events);
      this.setState({
        events: events
      });
    });
  };

  deleteEvent = id => {
    APImanager.delete("events", id).then(() => {
      APImanager.getAll("events").then(newEvent => {
        this.setState({
          events: newEvent
        });
      });
    });
  };

  render() {
    console.log("EventsList: Render!!!!", this.state.events);

    return (
      <>
        <div>
          <h2 className="eventsHeader">Coven Gatherings</h2>
          <section>
            <Button
              type="button"
              color="secondary"
              className="btn"
              onClick={() => {
                this.props.history.push("/events/new");
              }}
            >
              Enter Gathering
            </Button>
          </section>
        </div>
        <div>
          {this.state.events.map(event => (
            <EventsCard
              key={event.id}
              event={event}
              deleteEvent={this.deleteEvent}
              {...this.props}
            />
          ))}
        </div>
      </>
    );
  }
}

export default EventsList;
