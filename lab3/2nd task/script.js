function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return; // to prevent empty tasks
    let taskList = document.getElementById("taskList");
    let listItem = document.createElement("li");
    listItem.className = "list-group-item";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function () {
        taskTextElement.classList.toggle("completed", checkbox.checked);
    };

    let taskTextElement = document.createElement("span");
    taskTextElement.className = "task-text";
    taskTextElement.textContent = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function () {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(checkbox);
    listItem.appendChild(taskTextElement);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
}
