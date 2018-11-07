document.addEventListener('DOMContentLoaded', function () {
  initTasks();
  var deleteAllTasksBtn = document.getElementById('delete-all-tasks');
  deleteAllTasksBtn.onclick = deleteAllTasks;

  var addTodoTaskBtn = document.getElementById('add-todo-task');
  addTodoTaskBtn.onclick = onClickAddTask;
});

function initTasks() {
  var tasks = ['Buy apples', 'Ironhack labs', 'Book holidays flight', 'Call mom'];
  tasks.forEach(function (task) {
    addTask(task);
  })
}

function onClickAddTask() {
  var task = document.getElementById('todo-task');
  if (task && task.value !== '') {
    addTask(task.value);
    task.value = '';
  }
}

function addTask(task) {
  var deleteTaskNode = document.createElement('button');
  deleteTaskNode.appendChild(document.createTextNode('x'));
  deleteTaskNode.addEventListener('click', onClickDeleteTask);

  var taskNode = document.createElement('li');
  taskNode.appendChild(deleteTaskNode);
  taskNode.appendChild(document.createTextNode(task));
  
  var todoList = document.querySelector('#todo-list ul');
  todoList.appendChild(taskNode);
}

function onClickDeleteTask(element) {
  var todoList = document.querySelector('#todo-list ul');
  todoList.removeChild(element.target.parentNode);
}

function deleteAllTasks() {
  var todoList = document.querySelector('#todo-list ul');
  todoList.innerHTML = '';
}