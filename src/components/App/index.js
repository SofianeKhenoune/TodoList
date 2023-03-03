import React from "react";
import data from "../../data/tasks";
import Counter from "../Counter";
import Form from "../Form";
import Tasks from "../Tasks";
import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false,
    };
  }
  render() {
    return (
      <div className="app">
        <Form />
        <Counter />
        <Tasks data={data} />
      </div>
    );
  }
}

export default App;
