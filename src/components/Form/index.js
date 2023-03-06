import "./styles.scss";
import PropTypes from "prop-types";
import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focus();
  }
  render() {
    const { taskToAdd, setNewTaskLabel, handleAddTask } = this.props;
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
          ref={this.textInput}
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
}

Form.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  setNewTaskLabel: PropTypes.func,
  taskToAdd: PropTypes.string.isRequired,
};
export default React.memo(Form);
