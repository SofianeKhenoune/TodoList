import './styles.scss';
import PropTypes from 'prop-types';
import React from 'react';

function Counter({nbTasksNotDone}) {
  return (
    <p className="counter"> {nbTasksNotDone} tâches en cours</p>
  );
}

Counter.propTypes = {
  nbTasksNotDone : PropTypes.number.isRequired,
}

Counter.defaultProps ={
  nbTasksNotDone : 0,
}
export default React.memo(Counter);
