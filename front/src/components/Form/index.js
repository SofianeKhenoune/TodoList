import DOMPurify from "dompurify";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskToAdd, setTasksInState } from "../../actions/tasks";
import { generateNewTaskID, sortTasks } from "../../selectors/tasks";
import "./styles.scss";

function Form() {
  const inputRef = useRef(null);
  const tasks = useSelector((state) => state.tasks.tasks);
  const taskToAdd = useSelector((state) => state.tasks.taskToAdd);
  const dispatch = useDispatch();

  function handleAddTask() {
    if (taskToAdd != "") {
      const taskId = generateNewTaskID(tasks);
      let newTask = {
        id: taskId,
        label: taskToAdd,
        done: false,
      };
      dispatch(setTasksInState(sortTasks([...tasks, newTask])));
      dispatch(getTaskToAdd(""));
    }
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleAddTask();
        e.preventDefault();
      }}
    >
      <input
        type="text"
        ref={inputRef}
        className="form-item"
        placeholder="Ajouter une tâche"
        value={DOMPurify.sanitize(taskToAdd)}
        onChange={(e) => {
          dispatch(getTaskToAdd(e.target.value));
        }}
      />
    </form>
  );
}

export default Form;
