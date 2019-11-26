/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
class UI {

  constructor() {
    this.taskListClass = new TaskList();
    this.tasks = Storage.getAllTasks();

    // Declaring objects in the DOM
    this.idInput = document.querySelector('#task_id');
    this.nameInput = document.querySelector('#task_name');
    this.assigneeDropDown = document.querySelector('#assignee');
    this.statusCheckBox = document.querySelector('#status');
    this.tasksTableItem = document.querySelector('#tasks_table');
    this.creationDateInput = document.querySelector('#creation_date');

    this.listTasks();
  }

  addTask() {
    const date = new Date();
    /* const taskToAdd = {
      id: this.idInput.value,
      name: this.nameInput.value,
      assignee: this.assigneeDropDown.value,
      status: this.statusCheckBox.checked,
      creationDate: `${date.toLocaleDateString()} ${date.toLocaleTimeString}`,
    }; */
    /* const taskToAdd = {
      id: 1,
      name: 'Test task',
      assignee: 'Unassigned',
      status: true,
      creationDate: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
    }; */

    /* const result = this.taskClass.createTask(taskToAdd); */
    /* if (result === 'OK') {
      this.tasks = this.taskClass.taskList;
    } else {
      alert('Error when trying to save the new task');
    } */

    this.listTasks();
  }

  listTasks() {
    const tasks = this.taskListClass.listTasks();
    let output = '';
    tasks.forEach((task) => {
      output += `
        <div class="task">
        <div class="task-head">Task ID: ${task.id}</div>
        <div class="task-body">
          <span>${task.name}</span>
          <a href='#'>${task.status ? 'Done' : 'Pending'}</a>
        </div>
        <div class="task-actions">
          <button class="small-button warning">Edit</button>
          <button class="small-button danger">Remove</button>
        </div>
      </div>
      `;
    });
    this.tasksTableItem.innerHTML = output;
  }

  editTask(taskID) {
    const taskToEdit = this.taskListClass.listTasks(taskID);
  }

  removeTask(taskID) {
    if (confirm('Are you sure you want to remove this task?')) {
      const result = this.taskClass.deleteTask(taskID);
      if (result) {
        this.tasks = this.storage.taskList;
        alert('The task was successfully removed!');
        this.listTasks();
      }
    }
  }
}
