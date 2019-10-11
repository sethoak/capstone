import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import APIManager from "../../modules/apimanager";

 class TaskForm extends Component {
  state = {
    name: "",
    completed: "",
    completionDate: "",
    timeStamp: "",
    description: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  newTask = e => {
    console.log("firing new task");
    if (
      localStorage.getItem("credentials") !== null ||
      sessionStorage.getItem("credentials") !== null
    ) {
      let userId = sessionStorage.getItem("credentials");

      let task = {
        name: this.state.name,
        completed: this.state.completed,
        completionDate: this.state.completionDate,
        timeStamp: this.state.timeStamp,
        description:this.state.description
      };
      APIManager.post("tasks", task).then(() =>
        this.props.history.push("/tasks")
      );
    }
  };

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <label className="taskName">Task::</label>
            <input
              type="text"
              placeholder="Enter Task Here"
              id="name"
              onChange={this.handleFieldChange}
            ></input>

            <label className="dateName">Completion Date:</label>
            <input
              type="date"
              required
              id="completionDate"
              onChange={this.handleFieldChange}
              value={this.state.completionDate}
            ></input>

            <label className="taskStatus">Status:</label>
            <input
              type="checkbox"
              id="completed"
              onChange={this.handleFieldChange}
            ></input>

            <label className="taskTime">Time:</label>
            <input
                type="time"
                required
                onChange={this.handleFieldChange}
                id="timeStamp"
                value={this.state.timeStamp}
              />

            <label className="taskDescription">Task Details:</label>
            <input
              type="text"
              placeholder="Enter Task Details"
              id="description"
              onChange={this.handleFieldChange}
            ></input>
          </fieldset>
          <button type="button" onClick={this.newTask}>
            Save Task
          </button>
        </form>
      </div>
    );
  }
}

export default TaskForm;