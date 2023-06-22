import PropTypes from "prop-types";
import { BiEdit } from "react-icons/bi";
import {
  MdDeleteForever,
  MdOutlineDoneOutline,
  MdRemoveDone,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { getTaskToUpdate, setToggleModal } from "../../actions/tasks";

function Task({ label, done, id, setTaskState, removeTaskInState }) {
  const dispatch = useDispatch();
  const iconStyle = {
    backgroundColor: "rgba(255,255,255,0.8)",
    cursor: "pointer",
    marginRight: "0.5em",
    borderRadius: "0.3em",
    width: "1.5em",
    height: "1.5em",
  };
  const doneIcon = done && {
    display: "none",
  };
  // Condition si tache faite (isDone ? 'list-item' : '.list-item--done')}
  return (
    <div className="task">
      <p className={done ? "list-item list-item--done" : "list-item"} id={id}>
        {label}
      </p>
      <BiEdit
        color="#165955"
        style={{ ...iconStyle, ...doneIcon }}
        onClick={() => {
          dispatch(setToggleModal());
          dispatch(getTaskToUpdate({ id: id, label: label, done: done }));
        }}
      />
      <MdDeleteForever
        color="#b53c3c"
        style={iconStyle}
        onClick={() => {
          removeTaskInState(id);
        }}
      />
      {!done ? (
        <MdOutlineDoneOutline
          color="#165955"
          style={iconStyle}
          onClick={() => {
            setTaskState(id);
          }}
        />
      ) : (
        <MdRemoveDone
          color="#165955"
          style={iconStyle}
          onClick={() => {
            setTaskState(id);
          }}
        />
      )}
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
