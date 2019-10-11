import React, { Component } from "react";
import APIManager from "../../modules/apimanager";

class TaskEditForm extends Component {
  state = {
    name: "",
    completed: "",
    completionDate: "",
    description: "",
    timeStamp: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingTask = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedTask = {
      id: this.props.match.params.taskId,
      name: this.state.name,
      completionDate: this.state.completionDate,
      completed: this.state.completed,
      timeStamp: this.state.timeStamp,
      description: this.state.description
    };

    APIManager.put("tasks", editedTask).then(() =>
      this.props.history.push("/tasks")
    );
  };

  componentDidMount() {
    APIManager.get("tasks", this.props.match.params.taskId).then(
      task => {
        this.setState({
          name: task.name,
          completionDate: task.completionDate,
          completed: task.completed,
          timeStamp: task.timeStamp,
          description: task.description,
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
              <label htmlFor="title">Task</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
            <label htmlFor="title">Task Details</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="description"
                value={this.state.description}
              />

              <label htmlFor="date">Completion Date</label>
              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="completionDate"
                value={this.state.date}
              />

              <label htmlFor="synopsis">Status</label>
              <input
                type="checkbox"
                required
                onChange={this.handleFieldChange}
                id="completed"
                value={this.state.completed}
              />

              <label htmlFor="time">Time</label>
              <input
                type="time"
                required
                onChange={this.handleFieldChange}
                id="timeStamp"
                value={this.state.timeStamp}
              />
            </div>
            <div>
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingTask}
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

export default TaskEditForm;
