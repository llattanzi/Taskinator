var buttonEl = document.querySelector("#save-task");
var tasksToDo = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = documentCreateElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDo.appendChild(listItemEl);
}

buttonE1.addEventLsitener("click", createTaskHandler);
