import PropTypes from "prop-types";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { getTaskToUpdate, setToggleModal } from "../../actions/tasks";

function Task({ label, done, id, setTaskState, removeTaskInState }) {
  const dispatch = useDispatch();
  const iconStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: "0.5em",
    cursor: "pointer",
    marginRight: "0.5em",
  };
  const displayIcon = !done ? "block" : "none";
  // Condition si tache faite (isDone ? 'list-item' : '.list-item--done')}
  return (
    <div className="task">
      <p
        className={done ? "list-item list-item--done" : "list-item"}
        id={id}
        onClick={() => {
          setTaskState(id);
        }}
      >
        {label}
      </p>
      <BiEdit
        color="#165955"
        size={45}
        style={{ ...iconStyle, display: displayIcon }}
        onClick={() => {
          dispatch(setToggleModal());
          dispatch(getTaskToUpdate({ id: id, label: label, done: done }));
        }}
      />
      <MdDeleteForever
        color="#b53c3c"
        size={45}
        style={iconStyle}
        onClick={() => {
          removeTaskInState(id);
        }}
      />
    </div>
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
