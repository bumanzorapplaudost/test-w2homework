class Task {
  constructor() {
    this.tasksUI = new UI();
    this.storage = new Storage();

    this.taskList = this.tasksAPI.tasksFromLocalStorage;
    this.tasksUI.listTasks(this.taskList);
  }

  createTask(data) {
    this.taskList.push(data);
    this.tasksUI.listTasks(this.tasksList);
    this.storage.createTask(data);
  }

  editTask(taskID, task) {
    
  }


  deleteTask(taskID) {
    
  }
}
