import PropTypes from "prop-types";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

function Task({
  label,
  done,
  id,
  setTaskState,
  removeTaskInState,
  showModal
}) {
  const iconStyle= {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: "0.5em",
    cursor: "pointer",
    marginRight:'0.5em',
  }
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
        style={iconStyle}
        onClick={() => {
          showModal
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
