/*
https://github.com/coding-bootcamps-eu/web-apps-foundation/blob/main/web-app-basics/02-password-toggle.md

Password Toggle

Implement a web app that will toggle the visibility of a password like
this example (https://coding-katas.netlify.app/password-toggle/).

Requirments
 Add a input that holds a fictive password
 Add a button that will toggle the readability of the password in the input
 Change the text of the button to "Show Password" if the password is hidden
 Change the text of the button to "Hide Password" if the password is visible

Hints
<!-- Text input -->
<input type="text">

<!-- Password input -->
<input type="password">
*/

const inputPassword = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    button.textContent = "Hide Password";
  } else {
    inputPassword.type = "password";
    button.textContent = "Show Password";
  }
  console.log(inputPassword);
});
