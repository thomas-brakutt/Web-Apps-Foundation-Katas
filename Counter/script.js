const mainEl = document.querySelector("main");
const counter = document.querySelector("#counter");
const resetbutton = document.querySelector("button");

let zähler = 0; // Variable für Zähler zum hochzählen

// Funktion zum hochzählen
function counterEl() {
  zähler++; // zähler-Variable wir immer um 1 erhöht
  counter.innerText = zähler;
  mainEl.style.backgroundColor = "#f8ad8adf";
}

// Funktion, die den Bereich färbt
function färbung() {}

//Event Listener für Klicks auf die Fläche um den Zähler hochzuzählen
mainEl.addEventListener("click", counterEl);

// Event Listener für "Space" und "Enter" Tasten
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    counterEl();
  }
});

// Event Listener für Reset-Button
resetbutton.addEventListener("click", () => {
  zähler = 0; // zähler wird wieder auf 0 gesetzt
  counter.innerText = zähler; // das Html-Element wird mit zähler (nun gleich 0) überschrieben
  mainEl.style.backgroundColor = "";
});

/*

// Zwei Funktionen definieren
function ersteFunktion() {
    console.log("Erste Funktion wird ausgeführt.");
}

function zweiteFunktion() {
    console.log("Zweite Funktion wird ausgeführt.");
}

// Click-Event-Listener hinzufügen
document.getElementById("meinButton").addEventListener("click", function() {
    ersteFunktion(); // Erste Funktion aufrufen
    zweiteFunktion(); // Zweite Funktion aufrufen
});

*/
