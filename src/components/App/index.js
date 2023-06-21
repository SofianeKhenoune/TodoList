import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasksInState } from "../../actions/tasks";
import { getNbTasksNotDone, sortTasks } from "../../selectors/tasks";
import Counter from "../Counter";
import Form from "../Form";
import Modal from "../Modal";
import Tasks from "../Tasks";
import "./styles.scss";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const showModal = useSelector((state) => state.tasks.showModal);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }),
    [tasks];

  function removeTaskInState(taskId) {
    let newData = tasks.filter((task) => task.id !== taskId);
    dispatch(setTasksInState(newData));
  }
  function handleUpdateTask(taskId, newLabel) {
    const newData = [...tasks];
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    taskToUpdate.label = newLabel;
    dispatch(setTasksInState(sortTasks(newData)));
  }
  function setTaskState(taskIdUpdate) {
    const newData = [...tasks];
    const taskToUpdate = tasks.find((task) => task.id === taskIdUpdate);
    taskToUpdate.done = !taskToUpdate.done;
    dispatch(setTasksInState(sortTasks(newData)));
  }
  return (
    <div className="app">
      <Form />
      <Counter nbTasksNotDone={getNbTasksNotDone(tasks)} />
      <Tasks
        tasks={tasks}
        setTaskState={setTaskState}
        removeTaskInState={removeTaskInState}
      />
      <Modal handleUpdateTask={handleUpdateTask} />
    </div>
  );
}

export default App;
