/* eslint-disable quotes */
// annuaire des actions

// --- action types ---
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const GET_TASK_TO_ADD = "GET_TASK_TO_ADD";
export const GET_TASK_TO_UPDATE = "GET_TASK_TO_UPDATE";
export const SET_TASKS_IN_STATE = "SET_TASKS_IN_STATE";

// --- action creators ---
/**
 * @returns {object} Contains the type of the action for hide or show modal
 */
export const setToggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const getTaskToAdd = (label) => ({
  type: GET_TASK_TO_ADD,
  label: label,
});
export const getTaskToUpdate = (task) => ({
  type: GET_TASK_TO_UPDATE,
  task: task,
});
export const setTasksInState = (newTasks) => ({
  type: SET_TASKS_IN_STATE,
  newTasks: newTasks,
});
