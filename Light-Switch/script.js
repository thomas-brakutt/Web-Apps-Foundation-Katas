const myDiv = document.getElementById("myDiv");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  myButton.classList.toggle("darkMod");
  myDiv.classList.toggle("darkModDiv");

  if (document.title === "Good Morning") {
    document.title = "Good Night";
  } else document.title = "Good Morning";
});
