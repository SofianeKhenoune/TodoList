import PropTypes from "prop-types";
import React from "react";

function Task({ label, done, id, setTaskState }) {
  // Condition si tache faite (isDone ? 'list-item' : '.list-item--done')}
  return (
    <li>
      <label
        htmlFor="checkbox"
        className={done ? "list-item list-item--done" : "list-item"}
      >
        <input
          checked={done}
          id={id}
          type="checkbox"
          onChange={(event) => {
            setTaskState(id, event.target.checked);
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
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default React.memo(Task);
