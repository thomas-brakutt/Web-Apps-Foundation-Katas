const addBtn = document.querySelector("#addBtn"); // Zugriff auf Add-Button mit Id
const ul = document.querySelector("#ul"); // Zugriff auf das ul-Element mit Id
const inputTodo = document.querySelector("#inputField"); // Zugriff auf das Input-Feld mit Id
const error = document.querySelector("#error"); // Zugriff auf das span-Element mit Id
const filters = document.querySelectorAll(".filter");
let currentFilter = "all"; // Standardfilter: Alle Todos anzeigen

// Variable zum speichern der Todo´s die eingegeben werden
const todoList = {
  todos: JSON.parse(localStorage.getItem("todoList")) || [], // ladet die Daten aus LokalStorage ODER (wenn diese null oder undefined sind) ein leeres Array
};

addBtn.addEventListener("click", addElement); // "Click-Event" auf "add-Button" -> wenn geklickt wird wird "addElement-Funktion" ausgeführt

// addElement-Funktion zum hinzufügen des eingegebenen Todo´s
function addElement(event) {
  event.preventDefault(); // unterdrückt die standard "refresh-funktion" des Buttons (Seite wird bei klick neu geladen)

  // Variable die den Inhalt (.value) aus aus dem Input-Feld speichert
  const newTodo = {
    description: inputTodo.value.trim(), // inputTodo = Input-Feld / .value = Inhalt des Input-Feldes / .trim() = entfernt Leerzeichen vor und nach dem eingegebenen Text
    done: false,
    id: crypto.randomUUID(), // erstellt zu jedem eingegebenen Todo eine generiertet Id
  };

  // if-Kondition die bei "true" den Info-Text im Span-Element (id:error) ausgibt
  if (todoExists(newTodo)) {
    error.innerText = "existiert bereits"; // Fehlermeldung wird in das span-Element eingegeben
    setTimeout(function () {
      // Timerfunktion die den Text 2000s anzeigt und dann wieder verschwindet
      error.innerText = "";
    }, 2000);
    return;
  }

  // wenn if-kondition "false", wird das neue Todo in Variabe "todoList" im array todos gespeichert
  todoList.todos.push(newTodo);
  inputTodo.value = ""; // Eingabefeld wird geleert
  saveInLocalStorage(); // führt die Funktion aus und speichert die Daten im LokalStorage
  render(); // die render-Funktion (siehe unten) wird ausgeführt
}

// Funktion zum kontrollieren / verhindern, das gleiche Todo´s eingetragen werden
function todoExists(todo) {
  for (let i = 0; i < todoList.todos.length; i++) {
    // for-Schleife um den todos-array zu druchlaufen
    const currentTodo = todoList.todos[i]; // Variable, die den index von todos speichert

    // if-Kondition zum überprüfen, ob gleiche Todo´s eingetragen wurden
    if (
      // vergleicht todo-Parameter (kommt von newTodo) mit der bestehenden todo-List
      todo.description.toUpperCase() === currentTodo.description.toUpperCase()
    ) {
      return true;
    }
  }
  return false;
}

// Funktion zum ausführen der "Veränderung" auf der Html-Seite
function render() {
  ul.innerHTML = ""; // leert die aktuelle List

  // todoList.todos.forEach((todoElement) => {
  //   const li = document.createElement("li"); // erstellt ein "li-Element" für jedes eingetragene ToDo

  const TodoFilter = todoList.todos.filter((todo) => {
    if (currentFilter === "open") return !todo.done;
    if (currentFilter === "done") return todo.done;
    return true; // "all" Filter: Alle Todos anzeigen
  });

  TodoFilter.forEach((todoElement) => {
    const li = document.createElement("li");

    const todoText = document.createTextNode(todoElement.description); // Variable die den Text jedes ToDo´s speichert ( als TextNode)
    li.append(todoText); // fügt die TextNode dem Li-Element hinzu

    const checkbox = document.createElement("input"); // erstellt ein "checkbox-Element"
    checkbox.type = "checkbox"; // ändert den "Ckeckbox-Type" in ckeckbox
    checkbox.checked = todoElement.done;

    // Event-Listener für Checkbox, um den done-Status zu aktualisieren
    checkbox.addEventListener("change", () => {
      todoElement.done = checkbox.checked;
      saveInLocalStorage(); // führt die Funktion aus und speichert die Daten im LokalStorage
    });

    li.appendChild(checkbox);
    ul.appendChild(li);
  });

  // Standardmäßig "all"-Filter aktivieren, falls keiner ausgewählt ist
  const activeFilter = Array.from(filters).some((filter) => filter.checked);
  if (!activeFilter) {
    document.querySelector("#all").checked = true;
    currentFilter = "all";
  }
}

// EventListener für Remove-Button, um erledigte Todos zu entfernen -> führt dann die "remveDone-Funktion" aus
const removeBtn = document.querySelector("#removeBtn");
removeBtn.addEventListener("click", removeDone);

// Funktion zum Entfernen von erledigten Todos
function removeDone(event) {
  event.preventDefault();
  // Filtert alle Todos heraus, bei denen "done" auf false ist
  todoList.todos = todoList.todos.filter((todo) => !todo.done);
  saveInLocalStorage(); // führt die Funktion aus und speichert die Daten im LokalStorage
  render(); // Liste neu rendern
}

// Speichere den aktuellen Zustand der Todos im Local Storage
function saveInLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList.todos));
}

filters.forEach((filter) => {
  filter.addEventListener("change", (event) => {
    currentFilter = event.target.id;
    render();
  });
});

render();
