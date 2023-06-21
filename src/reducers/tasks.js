export const initialState = {
  tasks: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
  taskToAdd: "",
  taskToUpdate: {},
  showModal: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        showModal: !state.showModal,
      };
    case "GET_TASK_TO_ADD":
      return {
        ...state,
        taskToAdd: action.label,
      };
    case "GET_TASK_TO_UPDATE":
      return {
        ...state,
        taskToUpdate: action.task,
      };
    case "SET_TASKS_IN_STATE":
      return {
        ...state,
        tasks: action.newTasks,
      };

    default:
      return state;
  }
};

export default reducer;
