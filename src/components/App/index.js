import { useEffect, useState } from "react";
import Counter from "../Counter";
import Form from "../Form";
import Tasks from "../Tasks";
import "./styles.scss";
useState;

function App() {
  const [tasks, setTasks] = useState(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem("todos");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTodos);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });
  const [taskToAdd, setTaskToAdd] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }),
    [tasks];

  function sortTasks(arrayOfTasks) {
    return arrayOfTasks.sort((task) => {
      if (!task.done) {
        return -1;
      }
    });
  }

  function getNbTasksNotDone() {
    const tasksNotDone = tasks.filter((task) => !task.done);
    return tasksNotDone.length;
  }

  function generateNewTaskID() {
    if (tasks.length === 0) {
      return 1;
    }
    const idsInState = tasks.map((task) => task.id);
    return Math.max(...idsInState) + 1;
  }

  function handleAddTask() {
    if (taskToAdd != "") {
      const taskId = generateNewTaskID();
      let newTaskToUpdate = {
        id: taskId,
        label: taskToAdd,
        done: false,
      };
      setTasks([...tasks, newTaskToUpdate]);
    }

    newData.push(newTaskToUpdate);
  }
  function removeTaskInState(taskId) {
    let newData = tasks.filter((task) => task.id !== taskId);
    setTasks(newData);
  }

  function handleInputChange(NewTaskLabel) {
    setTaskToAdd(NewTaskLabel);
  }

  function setTaskState(taskIdUpdate) {
    const newData = [...tasks];
    let newTaskToUpdate = newData.find((task) => task.id === taskIdUpdate);
    newTaskToUpdate.done = !newTaskToUpdate.done;
    setTasks(newData);
  }
  return (
    <div className="app">
      <Form
        handleAddTask={handleAddTask}
        handleInputChange={setTaskToAdd}
        taskToAdd={taskToAdd}
        handleInputChange={handleInputChange}
        /*focusInput={this.textInput}*/
      />
      <Counter nbTasksNotDone={getNbTasksNotDone()} />
      <Tasks
        tasks={tasks}
        setTaskState={setTaskState}
        removeTaskInState={removeTaskInState}
      />
    </div>
  );
}

export default App;
