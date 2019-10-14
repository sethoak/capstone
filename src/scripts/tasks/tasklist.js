import React, { Component } from "react";
import APImanager from "../../modules/apimanager";
import TaskCard from "../../scripts/tasks/taskcard";
import { Button } from "reactstrap";
import "./task.css";

class TaskList extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    APImanager.getAll("tasks").then(tasks => {
      this.setState({
        tasks: tasks
      });
    });
  };

  deleteTask = id => {
    APImanager.delete("tasks", id).then(() => {
      APImanager.getAll("tasks").then(newTask => {
        this.setState({
          tasks: newTask
        });
      });
    });
  };

  render() {
    return (
      <>
        <div>
          <h2 className="taskHeader">Task:</h2>
          <section>
            <Button
              type="button"
              color="primary"
              className="btn"
              onClick={() => {
                this.props.history.push("/tasks/new");
              }}
            >
              Enter Task
            </Button>
          </section>
        </div>
        <div>
          {this.state.tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={this.deleteTask}
              {...this.props}
            />
          ))}
        </div>
      </>
    );
  }
}

export default TaskList;
