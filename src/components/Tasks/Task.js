import PropTypes from "prop-types";

function Task({ label, isDone, taskId, setTaskState }) {
  // Condition si tache faite (isDone ? 'list-item' : '.list-item--done')}
  return (
    <li>
      <label className={isDone ? "list-item--done" : "list-item"}>
        <input
          id={taskId}
          type="checkbox"
          onChange={(event) => {
            setTaskState(event.target.id);
          }}
        />
        {label}
      </label>
    </li>
  );
}

Task.propTypes = {
  label: PropTypes.string.isRequired,
  setTaskState: PropTypes.func.isRequired,
};

export default Task;
