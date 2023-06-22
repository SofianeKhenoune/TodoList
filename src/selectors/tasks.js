/**
 * @param {array} tasks - list of tasks
 * @returns {number} - New task identifier
 */
export function generateNewTaskID(tasks) {
  if (tasks.length === 0) {
    return 1;
  }
  const idsInState = tasks.map((task) => task.id);
  return Math.max(...idsInState) + 1;
}

/**
 * @param {array} tasks - list of tasks
 * @returns {array} - Sort tasks by done state
 */
export function sortTasks(arrayOfTasks) {
  return arrayOfTasks.sort((task) => {
    if (!task.done) {
      return -1;
    }
  });
}

/**
 * @param {array} tasks - list of tasks
 * @returns {number} - Number of not done tasks
 */
export function getNbTasksNotDone(tasks) {
  const tasksNotDone = tasks.filter((task) => !task.done);
  return tasksNotDone.length;
}
