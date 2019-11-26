class TaskList {

  constructor() {
    this.storage = new Storage();
  }z

  listTasks(filter = '') {
    if (filter !== '') {
      return this.storage.getTask(filter);
    }
    return this.storage.taskList;
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

}
