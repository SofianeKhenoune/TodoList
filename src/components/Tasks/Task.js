import PropTypes from "prop-types";

function Task({ label, isDone, taskId, setTaskState }) {
  // Condition si tache faite (isDone ? 'list-item' : '.list-item--done')}
  return (
    <li>
      <label className={isDone ? "list-item--done" : "list-item"}>
        <input
          checked={isDone && "checked"}
          id={taskId}
          type="checkbox"
          onChange={(event) => {
            let taskIdToUpdate = event.target.id;
            let taskStatusToUpdate = event.target.checked;
            setTaskState(taskIdToUpdate, taskStatusToUpdate);
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
  isDone: PropTypes.bool.isRequired,
  taskId : PropTypes.number.isRequired
};

export default Task;
