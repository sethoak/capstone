import React, { Component } from "react";
import APImanager from "../../modules/apimanager";
import TaskCard from "../../scripts/tasks/taskcard";


class TaskList extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    console.log("TASKS LIST: ComponentDidMount");
    this.getData();
  }

  getData = () => {
    APImanager.getAll("tasks").then(tasks => {
      console.log("am I getting tasks", tasks);
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
    console.log("TasksList: Render!!!!", this.state.tasks);

    return (
      <>
        <div>
          <h2 className="taskHeader">Task:</h2>
          <section>
            <button
              type="button"
              className="btn"
              onClick={() => {
                this.props.history.push("/tasks/new");
              }}
            >
              Enter Task
            </button>
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
