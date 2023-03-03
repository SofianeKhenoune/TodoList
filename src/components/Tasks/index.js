import './styles.scss';

function Tasks() {
  return (
    <ul class="list">
      <li>
        <label class="list-item list-item--done">
          <input type="checkbox" checked/>
          Ketchup
        </label>
      </li>
      <li>
        <label class="list-item">
          <input type="checkbox"/>
          Pâtes
        </label>
      </li>
      <li>
        <label class="list-item">
          <input type="checkbox"/>
          Salade
        </label>
      </li>
    </ul>
  );
}

export default Tasks;
