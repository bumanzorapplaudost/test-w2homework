class Storage {
  constructor() {
    if (!Array.isArray(JSON.parse(localStorage.getItem('tasks')))) {
      localStorage.setItem('tasks', '[]');
    } else {
      this.tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
    }
  }

  saveTask(task) {

  }

  getTask(taskID) {

  }

  deleteTask(taskID) {

  }
}
