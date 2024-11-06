const mainEl = document.querySelector("main");
const counter = document.querySelector("#counter");
const resetbutton = document.querySelector("button");

let zähler = 0; // Variable den Zähler zum hochzählen
let farbZähler = 0; //Variable für den Zähler des Farbverlaufswertes

// Funktion für Zähler zum hochzählen
function counterEl() {
  zähler++; // zähler-Variable wir immer um 1 erhöht
  counter.innerText = zähler; // "innerText wird bei dem <P> -Element mit Wert von "zähler" ersetzt
}

// Funktion, die den Bereich beim klicken färbt
function färbung() {
  farbZähler++; // erhöht den Wert immer um eins
  mainEl.style.backgroundImage =
    "linear-gradient(90deg, #f8ad8adf " + farbZähler + "%, white 0%)";
  /* allternative Schreibweise mit "Template-Strings"
     mainEl.style.backgroundImage = `linear-gradient(90deg, #f8ad8adf ${färbung}%, white 0%)`;
  */

  // wenn der Wert 100 erreicht hat, wird er auf 0 resettet
  if (farbZähler === 100) {
    farbZähler = 0;
  }
}

//Event Listener für Klicks auf die "main-Fläche um den Zähler hochzuzählen
mainEl.addEventListener("click", function () {
  // dadurch werden die beiden Funktionen ausgeführt
  counterEl();
  färbung();
});

// Event Listener für "Space" und "Enter" Tasten
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    counterEl();
    färbung();
  }
});

// Event Listener für Reset-Button
resetbutton.addEventListener("click", () => {
  zähler = 0; // zähler wird wieder auf 0 gesetzt
  counter.innerText = zähler; // das Html-Element wird mit zähler (nun gleich 0) überschrieben
  mainEl.style.backgroundImage =
    "linear-gradient(90deg, #f8ad8adf 0%, white 0%)"; // Farbverlauf wird zurückgesetzt
  farbZähler = 0;
});
