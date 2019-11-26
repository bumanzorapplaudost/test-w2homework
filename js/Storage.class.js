class Storage {

  constructor() {
    if (!Array.isArray(JSON.parse(localStorage.getItem('tasks')))) {
      localStorage.setItem('tasks', '[]');
      this.taskList = [];
    } else {
      this.taskList = JSON.parse(localStorage.getItem('tasks'));
    }
  }

  async saveTask(task, id = '') {
    /* if (id !== '') {
      this.taskList = this.taskList.filter((t) => t.id !== id);
    }
    this.taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
    return this.taskList; */

    const promise = new Promise((resolve, reject) => {
      if (id !== '') {
        this.taskList = this.taskList.filter((t) => t.id !== id);
      }
      this.taskList.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.taskList));
      resolve('OK');
    });

    const res = await promise;
    console.log(res);
    return res;
  }

  getTask(taskID) {
    if (typeof taskID !== 'number') {
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
