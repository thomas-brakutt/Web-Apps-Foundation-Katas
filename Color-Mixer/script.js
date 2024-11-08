const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const slider = document.querySelectorAll("input");

const colorCode = document.querySelector("p");

const main = document.querySelector("main");

function mainColor() {
  let redSlider = red.value;
  let greenSlider = green.value;
  let blueSlider = blue.value;

  let newMainColor =
    "rgb(" + redSlider + "," + greenSlider + "," + blueSlider + ")";

  colorCode.innerText = newMainColor;
  main.style.backgroundColor = newMainColor;
}
mainColor();

red.addEventListener("input", () => {
  mainColor();
});
green.addEventListener("input", () => {
  mainColor();
});
blue.addEventListener("input", () => {
  mainColor();
});
