import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import "./styles.scss";

function Form({ taskToAdd, handleInputChange, handleAddTask }) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
        ref={inputRef}
        className="form-item"
        placeholder="Ajouter une tâche"
        value={taskToAdd}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
    </form>
  );
}

Form.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func,
  taskToAdd: PropTypes.string.isRequired,
};
export default Form;
