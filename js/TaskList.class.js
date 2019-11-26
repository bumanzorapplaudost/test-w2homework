/* eslint-disable no-console */
class TaskList {

  listTasks(filter = '') {
    if (filter !== '') {
      Storage.getTask(filter);
    }
    return Storage.getAllTasks();
  }

  sortTasks(sortBy = 'desc') {
    if (sortBy === 'desc') {
      return this.storage.taskList.sort((a, b) => new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime());
    }

    return this.storage.taskList.sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime());
  }

  searchTasks(filter) {
    return this.storage.taskList.forEach((task) => task.name.includes(filter));
  }

  filterTasks(status = 0) {
    const stat = Boolean(status);
    return this.storage.taskList.filter((task) => task.status === stat);
  }

  editTask(taskID) {
  
  }

  createTask(taskData) {
    const taskCreationResult = new Task(taskData);
    if (taskCreationResult === 'OK') {
      return taskCreationResult;
    }
    return 'Error when creating Task';
  }

  deleteTask(taskID) {
    if (typeof taskID !== 'number') {
      return 'Error: This is not a number';
    }

    return this.storage.deleteTask(taskID);
  }
}
