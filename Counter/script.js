const mainEl = document.querySelector("main");
const counter = document.querySelector("#counter");
const resetbutton = document.querySelector("button");

let zähler = 0; // Variable für Zähler zum hochzählen
let farbZähler = 0; //Variable für den Zähler der Farbveränderung

// Funktion zum hochzählen
function counterEl() {
  zähler++; // zähler-Variable wir immer um 1 erhöht
  counter.innerText = zähler;
  //mainEl.style.backgroundColor = "#f8ad8adf";
}

// Funktion, die den Bereich beim klicken färbt
function färbung() {
  farbZähler++;
  mainEl.style.backgroundImage =
    "linear-gradient(90deg, #f8ad8adf " + farbZähler + "%, white 0%)";
  //allternative Schreibweise mit "Template-Strings"
  // mainEl.style.backgroundImage = `linear-gradient(90deg, #f8ad8adf ${färbung}%, white 0%)`;

  if (farbZähler === 100) {
    farbZähler = 0;
  }
  console.log(farbZähler);
}

//Event Listener für Klicks auf die Fläche um den Zähler hochzuzählen
mainEl.addEventListener("click", function () {
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

/*


        // Den neuen Farbverlauf auf das Element anwenden
        // clickableElement.style.backgroundImage = `linear-gradient(90deg, #f8ad8adf ${färbung}%, white 0%)`;

        // Optional: Den aktuellen Zählerwert und den neuen Verlauf ausgeben
        console.log(`Aktueller Zähler: ${counter}, Neuer Verlauf: ${newPercentage}%`);
    });


    // // Den neuen Farbverlauf auf das Element anwenden (ohne Template Literals)
        clickableElement.style.backgroundImage = 'linear-gradient(90deg, #f8ad8adf ' + newPercentage + '%, white ' + newPercentage + '%)';

        // Optional: Den aktuellen Zählerwert und den neuen Verlauf ausgeben
        // console.log('Aktueller Zähler: ' + counter + ', Neuer Verlauf: ' + newPercentage + '%');
*/
