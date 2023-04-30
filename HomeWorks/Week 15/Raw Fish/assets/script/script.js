// получаем ссылки на элементы HTML
const taskInput = document.getElementById("task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("tasks");
const noTasksMsg = document.getElementById("no-tasks-msg");
const clearTasksBtn = document.getElementById("clear-tasks-btn");

// добавляем обработчик клика на кнопку "Добавить задачу"
addTaskBtn.addEventListener("click", function () {
  // получаем текст задачи из input
  const taskText = taskInput.value.trim();

  // проверяем, что задача не пустая
  if (taskText !== "") {
    // создаем новый элемент списка задач
    const taskItem = document.createElement("li");

    // создаем новый чекбокс для отметки задачи выполненной
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.addEventListener("click", function () {
      // обрабатываем клик по чекбоксу
      if (taskCheckbox.checked) {
        taskItem.classList.add("done");
      } else {
        taskItem.classList.remove("done");
      }
    });

    // добавляем чекбокс и текст задачи в элемент списка задач
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(document.createTextNode(taskText));

    // добавляем элемент списка задач в список
    taskList.appendChild(taskItem);

    // очищаем input и делаем кнопку "Очистить список" активной
    taskInput.value = "";
    clearTasksBtn.disabled = false;

    // отображаем список задач
    noTasksMsg.style.display = "none";
    taskList.style.display = "block";
  }
});

// добавляем обработчик клика на кнопку "Очистить список"
clearTasksBtn.addEventListener("click", function () {
  // удаляем все элементы списка задач
  taskList.innerHTML = "";

  // скрываем список задач и делаем кнопку "Очистить список" неактивной
  taskList.style.display = "none";
  noTasksMsg.style.display = "block";
  clearTasksBtn.disabled = true;
});
