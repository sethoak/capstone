import APIManager from "../../modules/apimanager";
import React, { Component } from "react";
import FriendCard from "./friendsCard";
import { CardDeck } from "reactstrap"
// import { Link } from "react-router-dom"

export default class FriendList extends Component {
  state = {
    friends: [],
    friend: ""
  };
  getData = () => {
    console.log(this.props.currentUser);
    APIManager.getFriends(this.props.currentUser).then(friends =>
      this.setState({
        friends: friends
      })
    );
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    console.log(this.state.friends);
    return (
      <>
        <div>
        <CardDeck className="cardDeck">
          {this.state.friends.map(friend => (
            // console.log(this.state.friends),
            <FriendCard
              key={friend.id}
              getData={this.getData}
              currentUser={this.props.currentUser}
              friend={friend}
              friends={this.state.friends}
              {...this.props}
            />
          ))}
          </CardDeck>
        </div>
      </>
    );
  }
}
