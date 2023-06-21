import PropTypes from "prop-types";
import { useState } from "react";
import Form from "../Form";
import "./styles.scss";

function Modal({ taskToUpdate, handleUpdateTask, isVisible }) {
  const [taskText, setTaskText] = useState(taskToUpdate.label);
  function updateTask(){
    handleUpdateTask(taskToUpdate.id, taskText);
  }
  
  const styleModalShow = {
    display: isVisible && 'none',
  }
  return <div className='modal' style={styleModalShow}>
    <Form taskToAdd={taskText} handleInputChange={setTaskText} handleAddTask={updateTask}/>
  </div>;
}

Modal.propTypes = {
  taskToUpdate: PropTypes.object.isRequired,
  handleUpdateTask: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default Modal;
