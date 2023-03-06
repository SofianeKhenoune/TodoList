import data from "../../data/tasks";
import React from "react";
import Counter from "../Counter";
import Form from "../Form";
import Tasks from "../Tasks";
import "./styles.scss";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.sortTasks(data),
      taskToAdd: "",
    };

    this.getNbTasksNotDone = this.getNbTasksNotDone.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  sortTasks(arrayOfTasks) {
    return arrayOfTasks.sort((task) => {
      if (!task.done) {
        return -1;
      }
    });
  }

  getNbTasksNotDone() {
    const tasksNotDone = this.state.data.filter((task) => !task.done);
    return tasksNotDone.length;
  }

  generateNewTaskID() {
    const idsInState = this.state.data.map((task) => task.id);
    return Math.max(...idsInState) + 1;
  }

  handleAddTask() {
    const taskId = this.generateNewTaskID();
    let newData = [...this.state.data];
    let newTaskToUpdate = {
      id: taskId,
      label: this.state.taskToAdd,
      done: false,
    };
    newData.push(newTaskToUpdate);
    this.setState({
      data: this.sortTasks(newData),
      taskToAdd: "",
    });
  }

  setNewTaskLabel(NewTaskLabel) {
    this.setState({
      taskToAdd: NewTaskLabel,
    });
  }

  setTaskState(taskIdUpdate, taskStatusToUpdate) {
    let newData = [...this.state.data];
    let newTaskToUpdate = newData.find(task => task.id === taskIdUpdate)
    newTaskToUpdate.done = taskStatusToUpdate;
    this.setState({
      data: this.sortTasks(newData),
    });
  }
  render() {
    const { data, taskToAdd } = this.state;
    return (
      <div className="app">
        <Form
          handleAddTask={this.handleAddTask}
          handleInputChange={this.handleInputChange}
          taskToAdd={taskToAdd}
          setNewTaskLabel={this.setNewTaskLabel.bind(this)}
        />
        <Counter nbTasksNotDone={this.getNbTasksNotDone()} />
        <Tasks data={data} setTaskState={this.setTaskState.bind(this)} />
      </div>
    );
  }
}

export default App;
