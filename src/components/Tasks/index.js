
import PropTypes from "prop-types";
import "./styles.scss";
import Task from "./Task";

function Tasks({ data, setTaskState }) {
  return (
    <ul className="list">
      {data.map((task) => (
        <Task
          label={task.label}
          key={task.id}
          isDone={task.done}
          taskId={data.indexOf(task)}
          setTaskState={setTaskState}
        />
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTaskState: PropTypes.func.isRequired,
};

export default Tasks;
