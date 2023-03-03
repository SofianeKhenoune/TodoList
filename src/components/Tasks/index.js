import PropTypes from 'prop-types';
import './styles.scss';

import Task from './Task';

function Tasks({data}) {
  return (
    <ul className="list">
      <Task text='Ketchup'/>
    </ul>
  );
}

Tasks.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Tasks;

