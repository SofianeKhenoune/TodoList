import React from "react";
import Counter from "../Counter";
import Form from "../Form";
import Tasks from "../Tasks";
import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          label: "Coder une todolist en impératif",
          done: true,
        },
        {
          id: 13,
          label: "Coder une todolist en React",
          done: false,
        },
        {
          id: 4,
          label: "Appeler Jean-Marc",
          done: false,
        },
        {
          id: 8,
          label: "Préparer des crêpes",
          done: false,
        },
      ],
    };
  }
 
  setTaskState(taskId){
    const taskToUpdate = this.state.data.find(task=> task.id === taskId);
      this.setState({
        data : taskToUpdate.done =true;
      })
    })
  } 
  render() {
    return (
      <div className="app">
        <Form />
        <Counter/>
        <Tasks data={this.state.data} setTaskState={this.setTaskState.bind(this)}/>
      </div>
    );
  }
}

export default App;
