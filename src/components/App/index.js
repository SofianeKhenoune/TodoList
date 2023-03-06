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
    if (this.state.data.length === 0) {
      return 1;
    }
    const idsInState = this.state.data.map((task) => task.id);
    return Math.max(...idsInState) + 1;
  }

  handleAddTask() {
    const { data, taskToAdd } = this.state;
    const taskId = this.generateNewTaskID();
    let newData = [...data];
    let newTaskToUpdate = {
      id: taskId,
      label: taskToAdd,
      done: false,
    };
    newData.push(newTaskToUpdate);
    this.setState({
      data: this.sortTasks(newData),
      taskToAdd: "",
    });
  }
  removeTaskInState(taskId) {
    let newData = this.state.data.filter((task) => task.id !== taskId);
    this.setState({
      data: this.sortTasks(newData),
    });
  }

  setNewTaskLabel(NewTaskLabel) {
    this.setState({
      taskToAdd: NewTaskLabel,
    });
  }

  setTaskState(taskIdUpdate) {
    let newData = [...this.state.data];
    let newTaskToUpdate = newData.find((task) => task.id === taskIdUpdate);
    newTaskToUpdate.done = !newTaskToUpdate.done;
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
          /*focusInput={this.textInput}*/
        />
        <Counter nbTasksNotDone={this.getNbTasksNotDone()} />
        <Tasks
          data={data}
          setTaskState={this.setTaskState.bind(this)}
          removeTaskInState={this.removeTaskInState.bind(this)}
        />
      </div>
    );
  }
}

export default App;
