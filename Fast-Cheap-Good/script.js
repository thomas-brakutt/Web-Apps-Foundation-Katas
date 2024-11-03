const checkBoxen = document.querySelector("#checkBoxen");
// Zugriff auf das "Html <form> Element" mit den "Checkboxen" über die Id #checkBoxen

let count = 0; // Zähler für gecheckte Checkboxen
let lastChecked = null; // Variable zum speichern für zuletzt gecheckte Checkbox

checkBoxen.addEventListener("change", function (event) {
  // eventListener auf die "checkBoxen" mit "change-Event"
  // "change" kann in dem "<form> -Element", in dem sich die Checkboxen / Input befinden, die gecheckten Checkboxen erkennen / registrieren
  // Erklärung - funktion siehe unten

  const aktuelleCheckbox = event.target;
  // Variable in der die aktuell gecheckte Checkbox gespeichert wird (mit .target (siehe unten))

  // wenn eine Checkbox gecheckt wird (aktuelleCheckbox.ckecked === true), wird mit "count++" hochgezählt
  // wenn nicht "ungecheckt" wird wieder runter gezählt
  if (aktuelleCheckbox.checked === true) {
    count++;
  } else {
    count--;
  }

  // wenn bis 3 hochgezählt, wird die zuvor gecheckte Checkbox ungecheckt
  // und der Zähler um 1 zurückgezählt
  if (count === 3) {
    lastChecked.checked = false;
    count--;
  }
  lastChecked = aktuelleCheckbox;
});

/*
Callbackfunktion, genannt "event":  - das Event wird von dem Eventlistener in die Eventfunktion übergeben
                                    - kann mit console.log(event) ausgelesen werden
                                    - darunter kann ich Keys anzeigen lassen -> Property ".target" ist in dem fall wichtig
                                      um herauszufinden, welche Checkbox gecheckt wurde
                                      -> kann mit console.log(event.target) ausgelesen werden
*/
