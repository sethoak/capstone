import React, { Component } from "react";
import APIManager from "../../modules/apimanager";
import "./task.css";
import { Button } from "reactstrap";

class TaskCard extends Component {
  markComplete = () => {
    APIManager.get("task", this.props.task.id).then(task => {
      task.completed = true;
    });
  };

  render() {
    return (
      <div className="taskContainer">
        <p className="sectionTitle">
          <b>
            <u>Task:</u>
          </b>
        </p>
        <p>{this.props.task.name}</p>

        <p className="sectionTitle">
          <b>
            <u>Completion Date:</u>
          </b>
        </p>
        <p>{this.props.task.completionDate}</p>
        <p className="sectionTitle">
          <b>
            <u>Task Details:</u>
          </b>
        </p>
        <p>{this.props.task.description}</p>
        <p className="sectionTitle">
          <b>
            <u>Time Stamp:</u>
          </b>
        </p>
        <p>{this.props.task.timeStamp}</p>
        <p>
          {" "}
          Completed
          <input type="checkbox" onClick={this.markComplete}></input>
        </p>
        <div className="taskButtons">
          <Button
            type="deleteTaskbutton"
            color="danger"
            onClick={() => this.props.deleteTask(this.props.task.id)}
          >
            Delete
          </Button>
          <Button
            type="editTaskbutton"
            color="warning"
            onClick={() => {
              this.props.history.push(`/tasks/${this.props.task.id}/edit`);
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    );
  }
}

export default TaskCard;
