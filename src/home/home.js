import React, { Component } from 'react';
import MessageList from '../scripts/messages/messagelist';
import TaskList from '../scripts/tasks/tasklist';
import FriendList from '../scripts/friends/friendsList';
import "../scripts/messages/message.css"
// import './Home.css'
class Home extends Component {

    render() {
        return (
            <div >
                <h2>HEXBook Homepage<br />
                    <small>home page slogan</small>
                    {
                        <>
                        <MessageList currentUser={this.props.currentUser} {...this.props} />
                        <TaskList />
                        {/* <FriendList /> */}
                        </>
                    }
                </h2>
            </div >
        )
    }
}

export default Home;