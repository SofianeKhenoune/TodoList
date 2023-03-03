import PropTypes from 'prop-types';

function Task({text}) {
  // Condition si tache faite (isDone ? 'list-item' : '.list-item--done')}
  return (
    <li>
      <label className="list-item">
        <input type="checkbox"/>
        {text}
      </label>
    </li>
  );
}

Task.propTypes= {
  text : PropTypes.string.isRequired,
}

export default Task;
