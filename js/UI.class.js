/* eslint-disable no-alert */
class UI {

  constructor() {
    this.taskClass = new Task();
    this.taskListClass = new TaskList();
    this.tasks = this.storage.taskList;

    // Declaring objects in the DOM
    this.idInput = document.querySelector('#task_id');
    this.nameInput = document.querySelector('#task_name');
    this.assigneeDropDown = document.querySelector('#assignee');
    this.statusCheckBox = document.querySelector('#status');
    this.tasksTableItem = document.querySelector('#tasks_table');
    this.creationDateInput = document.querySelector('#creation_date');

    this.listTasks();
  }

  listTasks() {
    const tasks = this.taskListClass.listTasks();
    let output = '';
    tasks.forEach((task) => {
      output += `
        <tr>
          <td>${task.id}</td>
          <td>${task.name}</td>
          <td>${task.assignee}</td>
          <td>${task.status ? 'Done' : 'Pending'}</td>
          <td>${task.creationDate}</td>
          <td>
            <a href='#edit'>Edit</a> |
            <a href='#remove'>Remove</a>
          </td>
        </tr>
      `;
    });
    this.tasksTableItem.innerHTML = output;
  }

  addTask() {
    const date = new Date();
    const taskToAdd = {
      id: this.idInput.value,
      name: this.nameInput.value,
      assignee: this.assigneeDropDown.value,
      status: this.statusCheckBox.checked,
      creationDate: `${date.toLocaleDateString()} ${date.toLocaleTimeString}`,
    };

    const result = this.taskClass.createTask(taskToAdd);
    if (result === 'OK') {
      this.listTasks();
    } else {
      alert('Error when trying to save the new task');
    }
  }

  editTask(taskID) {
    const taskToEdit = this.taskListClass.listTasks(taskID);
  }

  removeTask(taskID) {
    if (confirm('Are you sure you want to remove this task?')) {
      const result = this.taskClass.removeTask(taskID);
      if (result) {
        alert('Task was removed');
      }
    }
  }
}
