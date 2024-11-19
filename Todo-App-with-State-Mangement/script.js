const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("#ul");
const inputTodo = document.querySelector("#inputField");
const error = document.querySelector("#error");

const todoList = {
  todos: [
    { description: "work on Todo-List", done: false },
    { description: "learning JS", done: false },
  ],
};

addBtn.addEventListener("click", addElement);

function addElement(event) {
  event.preventDefault(); // unterdrückt die "refresh-funktion" des Buttons (Seite wird bei klick neu geladen)

  const newTodo = {
    description: inputTodo.value.trim(),
    done: false,
    id: crypto.randomUUID(),
  };

  if (todoExists(newTodo)) {
    error.innerText = "existiert bereits";
    setTimeout(function () {
      error.innerText = "";
    }, 2000);
    return;
  }

  todoList.todos.push(newTodo);
  render();
}

function todoExists(todo) {
  for (let i = 0; i < todoList.todos.length; i++) {
    const currentTodo = todoList.todos[i];
    if (
      todo.description.toUpperCase() === currentTodo.description.toUpperCase()
    ) {
      return true;
    }
  }
  return false;
}

function render() {
  ul.innerHTML = ""; // leert die aktuelle List
  todoList.todos.forEach((todoElement) => {
    const li = document.createElement("li"); // erstellt ein "li-Element"

    const todoText = document.createTextNode(todoElement.description);
    li.append(todoText);

    const checkbox = document.createElement("input"); // erstellt ein "checkbox-Element"
    checkbox.type = "checkbox"; // ändert den "Ckeckbox-Type" in ckeckbox
    checkbox.checked = todoElement.done;
    li.appendChild(checkbox);
    ul.appendChild(li);
  });
}
render();
