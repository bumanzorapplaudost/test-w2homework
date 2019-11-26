class TaskList {

  constructor() {
    this.storage = new Storage();
  }

  listTasks(filter = '') {
    if (filter !== '' && typeof Number(filter) === 'number') {
      return this.storage.getTask(filter);
    }
    return this.storage.taskList;
  }

  sortTasks(sortBy = 'desc') {

  }

  searchTasks(filter) {

  }

  filterTasks(status = 0) {

  }

}
