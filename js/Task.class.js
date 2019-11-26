class Task {

  constructor(task = []) {
    this.taskList = Storage.taskList;

    const result = Storage.saveTask(task);
    if (Array.isArray(result) && result.length > 0) {
      this.taskList = result;
      return 'OK';
    }

    return 'Error';
  }
}
