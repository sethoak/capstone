import React, { Component } from "react";
import MessageList from "../scripts/messages/messagelist";
import TaskList from "../scripts/tasks/tasklist";
import FriendList from "../scripts/friends/friendsList";
import "../scripts/messages/message.css";
import EventsList from "../scripts/events/eventlist";
import NewsList from "../scripts/news/newslist";
import { Card } from "reactstrap";
// import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>
          HEXBook Homepage
          <br />
          <small>home page slogan</small>
          {
            <>
              <Card>
                <MessageList
                  currentUser={this.props.currentUser}
                  {...this.props}
                />
              </Card>
              <Card>
                <TaskList
                  currentUser={this.props.currentUser}
                  {...this.props}
                />
              </Card>
              <Card>
                <FriendList
                  currentUser={this.props.currentUser}
                  {...this.props}
                />
              </Card>
              <Card>
                <NewsList
                  currentUser={this.props.currentUser}
                  {...this.props}
                />
              </Card>
              <Card>
                <EventsList
                  currentUser={this.props.currentUser}
                  {...this.props}
                />
              </Card>
            </>
          }
        </h2>
      </div>
    );
  }
}

export default Home;
