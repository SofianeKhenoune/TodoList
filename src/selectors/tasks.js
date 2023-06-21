export function generateNewTaskID(tasks) {
  if (tasks.length === 0) {
    return 1;
  }
  const idsInState = tasks.map((task) => task.id);
  return Math.max(...idsInState) + 1;
}

export function sortTasks(arrayOfTasks) {
  return arrayOfTasks.sort((task) => {
    if (!task.done) {
      return -1;
    }
  });
}

export function getNbTasksNotDone(tasks) {
  const tasksNotDone = tasks.filter((task) => !task.done);
  return tasksNotDone.length;
}
