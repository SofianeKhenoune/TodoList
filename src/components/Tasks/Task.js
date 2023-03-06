import PropTypes from "prop-types";
import React from "react";

function Task({ label, done, id, setTaskState,removeTaskInState }) {
  // Condition si tache faite (isDone ? 'list-item' : '.list-item--done')}
  return (
    <li className="li-item">
      <label
        htmlFor="checkbox"
        className={done ? "list-item list-item--done" : "list-item"}
      >
        <input
          checked={done}
          id={id}
          type="checkbox"
          onChange={() => {
            setTaskState(id);
          }}
        />
        {label}
      </label>
      <span onClick={() => {
        removeTaskInState(id);
      }}>
        X
      </span>
    </li>
  );
}

Task.propTypes = {
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  removeTaskInState: PropTypes.func.isRequired,
  setTaskState: PropTypes.func.isRequired
}

export default React.memo(Task);
