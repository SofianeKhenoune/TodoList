import PropTypes from "prop-types";
import React from "react";
import "./styles.scss";

function Counter({ nbTasksNotDone }) {
  return <p className="counter"> {nbTasksNotDone} tâches en cours</p>;
}

Counter.propTypes = {
  nbTasksNotDone: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  nbTasksNotDone: 0,
};
export default Counter;
