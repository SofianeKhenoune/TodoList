import "./styles.scss";
import PropTypes from "prop-types";

function Form({ handleAddTask }) {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        
        const taskToAdd = document.querySelector(".form-item").value;
        handleAddTask(taskToAdd);
        e.target.reset();
        e.preventDefault();
        
      }}
    >
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
      />
    </form>
  );
}

Form.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};
export default Form;
