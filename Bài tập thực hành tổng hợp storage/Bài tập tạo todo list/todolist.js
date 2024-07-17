document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("new-todo");
  const addTodoButton = document.getElementById("add-todo");
  const todoList = document.getElementById("todo-list");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let isEditing = false;
  let editingIndex = null;

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = "todo-item";
      li.innerHTML = `
                <span>${todo}</span>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">X</button>
            `;
      todoList.appendChild(li);
    });
  }

  function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      if (isEditing) {
        todos[editingIndex] = todoText;
        isEditing = false;
        editingIndex = null;
      } else {
        todos.push(todoText);
      }
      saveTodos();
      renderTodos();
      todoInput.value = "";
    }
  }

  function editTodo(index) {
    todoInput.value = todos[index];
    isEditing = true;
    editingIndex = index;
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  }

  addTodoButton.addEventListener("click", addTodo);

  todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      const index = event.target.getAttribute("data-index");
      deleteTodo(index);
    } else if (event.target.classList.contains("edit-btn")) {
      const index = event.target.getAttribute("data-index");
      editTodo(index);
    }
  });

  renderTodos();
});
