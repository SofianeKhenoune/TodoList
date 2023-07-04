import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Task from "./Task";
import "./styles.scss";

function Tasks({ removeTaskInState, setTaskState }) {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          removeTaskInState={removeTaskInState}
          setTaskState={setTaskState}
          {...task}
        />
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  removeTaskInState: PropTypes.func.isRequired,
  setTaskState: PropTypes.func.isRequired,
};

export default Tasks;
