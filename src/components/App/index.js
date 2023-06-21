import { useEffect, useState } from "react";
import Counter from "../Counter";
import Form from "../Form";
import Modal from "../Modal";
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
  const [showModal, setShowModal] = useState(false);

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
      let newTask = {
        id: taskId,
        label: taskToAdd,
        done: false,
      };
      setTasks(sortTasks([...tasks, newTask]));
      setTaskToAdd("");
    }
  }
  function removeTaskInState(taskId) {
    let newData = tasks.filter((task) => task.id !== taskId);
    setTasks(newData);
  }
  function handleUpdateTask(taskId, newLabel) {
    const newData = [...tasks];
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    taskToUpdate.label = newLabel;
    setTasks(sortTasks(newData));
  }
  function setTaskState(taskIdUpdate) {
    const newData = [...tasks];
    const taskToUpdate = tasks.find((task) => task.id === taskIdUpdate);
    taskToUpdate.done = !taskToUpdate.done;
    setTasks(sortTasks(newData));
  }
  return (
    <div className="app">
      <Form
        handleAddTask={handleAddTask}
        handleInputChange={setTaskToAdd}
        taskToAdd={taskToAdd}
        /*focusInput={this.textInput}*/
      />
      <Counter nbTasksNotDone={getNbTasksNotDone()} />
      <Tasks
        tasks={tasks}
        setTaskState={setTaskState}
        removeTaskInState={removeTaskInState}
      />
      <Modal
        taskToUpdate={{ id: 100, label: "sofiane", done: false }}
        isVisible={showModal}
        handleUpdateTask={handleUpdateTask}
      />
    </div>
  );
}

export default App;
