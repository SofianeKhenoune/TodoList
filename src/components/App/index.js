import data from "../../data/tasks";
import React from "react";
import Counter from "../Counter";
import Form from "../Form";
import Tasks from "../Tasks";
import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      taskToAdd: "",
    };

    this.getNbTasksNotDone = this.getNbTasksNotDone.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  getNbTasksNotDone() {
    const tasksNotDone = this.state.data.filter((task) => task.done === false);
    return tasksNotDone.length;
  }

  generateNewTaskID() {
    const idsInState = this.state.data.map((task) => task.id);
    return Math.max(...idsInState) + 1;
  }

  handleAddTask(taskToAdd) {
    const taskId = this.generateNewTaskID();
    console.log(taskId);
    let newData = [...this.state.data];
    let newTaskToUpdate = { id: taskId, label: taskToAdd, done: false };
    newData.push(newTaskToUpdate);
    this.setState({
      data: newData,
    });
  }

  setTaskState(taskId, taskStatusToUpdate) {
    let newData = [...this.state.data];
    let newTaskToUpdate = { ...newData[taskId] };
    newTaskToUpdate.done = taskStatusToUpdate;
    newData[taskId] = newTaskToUpdate;
    this.setState({
      data: newData,
    });
  }
  render() {
    return (
      <div className="app">
        <Form
          handleAddTask={this.handleAddTask}
          handleInputChange={this.handleInputChange}
        />
        <Counter nbTasksNotDone={this.getNbTasksNotDone()} />
        <Tasks
          data={this.state.data}
          setTaskState={this.setTaskState.bind(this)}
        />
      </div>
    );
  }
}

export default App;
