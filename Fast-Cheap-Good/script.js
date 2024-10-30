const checkBoxen = document.querySelector("#checkBoxen");

let count = 0;
let lastChecked = null;

checkBoxen.addEventListener("change", function (event) {
  const aktuelleCheckbox = event.target;

  if (aktuelleCheckbox.checked === true) {
    count++;
  } else {
    count--;
  }

  if (count === 3) {
    lastChecked.checked = false;
    count--;
  }
  lastChecked = aktuelleCheckbox;
});
