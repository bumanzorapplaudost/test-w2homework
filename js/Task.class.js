class Task {

  constructor() {
    this.storage = new Storage();
    this.taskList = this.storage.taskList;
  }

  createTask(data) {
    const result = this.storage.saveTask(data);
    if (Array.isArray(result) && result.length > 0) {
      this.taskList = result;
      return 'OK';
    }

    return 'Error';
  }

  editTask(taskID, task) {
    
  }


  deleteTask(taskID) {
    if (typeof taskID !== 'number') {
      return 'Error: This is not a number';
    }

    return this.storage.deleteTask(taskID);
  }
}
