import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getTaskToUpdate, setToggleModal } from "../../actions/tasks";
import "./styles.scss";

function Modal({ handleUpdateTask }) {
  const dispatch = useDispatch();
  const taskToUpdate = useSelector((state) => state.tasks.taskToUpdate);
  const isVisible = useSelector((state) => state.tasks.showModal); 

  const styleModalShow = {
    display: isVisible ? "block" : "none",
  };
  return (
    <div className="modal" style={styleModalShow}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (taskToUpdate.label != '') {
            handleUpdateTask(taskToUpdate.id, taskToUpdate.label);
            dispatch(setToggleModal());
          }
        }}
      >
        <input 
          type="text" 
          value={taskToUpdate.label}
          onChange={(e) => {
            dispatch(getTaskToUpdate({...taskToUpdate, label: e.target.value} ))
          }}
        />
      </form>
    </div>
  );
}

Modal.propTypes = {
  handleUpdateTask: PropTypes.func.isRequired,
};

export default Modal;
