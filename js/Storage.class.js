class Storage {
  constructor() {
    if (!Array.isArray(JSON.parse(localStorage.getItem('tasks')))) {
      localStorage.setItem('tasks', '[]');
      this.taskList = [];
    } else {
      this.taskList = JSON.parse(localStorage.getItem('tasks'));
    }
  }

  saveTask(task, id = '') {
    if (id !== '') {
      this.taskList = this.taskList.filter((t) => t.id !== id);
    } else {
      this.taskList.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.taskList));
    }
  }

  getTask(taskID) {
    if(typeof taskID !== 'number') {
      return 'Error when retrieving task, the ID is not valid';
    }
    const task = this.taskList.filter((t) => t.id === taskID)[0];
    return task;
  }

  deleteTask(taskID) {
    if (typeof taskID !== 'number') {
      return 'Error when deleting task, ID is not valid';
    }
    this.taskList = this.taskList.filter((t) => t.id !== taskID);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
    return 'OK';
  }
}
