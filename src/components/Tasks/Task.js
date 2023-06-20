import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

function Task({ label, done, id, setTaskState, removeTaskInState }) {
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
      <MdDeleteForever
        color="#b53c3c"
        size={45}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          borderRadius: "0.5em",
          cursor: "pointer",
        }}
        onClick={() => {
          removeTaskInState(id);
        }}
      />
    </li>
  );
}

Task.propTypes = {
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  removeTaskInState: PropTypes.func.isRequired,
  setTaskState: PropTypes.func.isRequired,
};

export default Task;
