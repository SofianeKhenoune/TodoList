import PropTypes from "prop-types";
import Task from "./Task";
import "./styles.scss";

function Tasks({ tasks, setTaskState, removeTaskInState }) {
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
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  removeTaskInState: PropTypes.any,
  setTaskState: PropTypes.func.isRequired,
};

export default Tasks;
