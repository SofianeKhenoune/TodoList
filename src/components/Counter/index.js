import './styles.scss';
import PropTypes from 'prop-types';

function Counter({nbTasksNotDone}) {
  return (
    <p className="counter"> {nbTasksNotDone} tâches en cours</p>
  );
}

Counter.propTypes = {
  nbTasksNotDone : PropTypes.number.isRequired,
}
export default Counter;
