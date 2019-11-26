class Storage {

  constructor() {
    if (!Array.isArray(JSON.parse(localStorage.getItem('tasks'))) && JSON.parse(localStorage.getItem('tasks')).length > 0) {
      localStorage.setItem('tasks', '[]');
    }
    this.taskList = JSON.parse(localStorage.getItem('tasks'));
  }

  static refreshTasks() {
    this.taskList = JSON.parse(localStorage.getItem('tasks'));
    if (Array.isArray(this.taskList) && this.taskList.length > 0) {
      this.taskList = JSON.parse(localStorage.getItem('tasks'));
    } else {
      localStorage.setItem('tasks', '[]');
      this.taskList = [];
    }
  }

  static getAllTasks() {
    this.refreshTasks();
    return this.taskList;
  }

  static saveTask(task, id = '') {
    this.refreshTasks();
    if (id !== '') {
      this.taskList = this.taskList.filter((t) => t.id !== id);
    }
    this.taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
    return this.getAllTasks();
  }

  static getTask(taskID) {
    if (typeof taskID !== 'number') {
      return 'Error when retrieving task, the ID is not valid';
    }
    const task = this.taskList.filter((t) => t.id === taskID)[0];
    return task;
  }

  static deleteTask(taskID) {
    if (typeof taskID !== 'number') {
      return 'Error when deleting task, ID is not valid';
    }
    this.taskList = this.taskList.filter((t) => t.id !== taskID);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
    return 'OK';
  }
}