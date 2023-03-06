import "./styles.scss";
import PropTypes from "prop-types";
import React from "react";

function Form({ handleAddTask, taskToAdd, setNewTaskLabel,  /*focusInput*/}) {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleAddTask();
        e.preventDefault();
      }}
    >
      <input
        type="text"
        /*ref={focusInput}*/
        className="form-item"
        placeholder="Ajouter une tâche"
        value={taskToAdd}
        onChange={(e) => {
          setNewTaskLabel(e.target.value);
        }}
      />
    </form>
  );
}

Form.propTypes = {
  /*focusInput: PropTypes.object.isRequired,*/
  handleAddTask: PropTypes.func.isRequired,
  setNewTaskLabel: PropTypes.func,
  taskToAdd: PropTypes.string.isRequired
}
export default React.memo(Form);
