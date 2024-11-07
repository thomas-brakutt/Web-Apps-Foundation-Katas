const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

const redText = document.querySelector(".red");
const greenText = document.querySelector(".green");
const blueText = document.querySelector(".blue");

red.addEventListener("input", function () {
  redText.innerText = red.value;
});

green.addEventListener("input", function () {
  greenText.innerText = green.value;
});

blue.addEventListener("input", function () {
  blueText.innerText = blue.value;
});
