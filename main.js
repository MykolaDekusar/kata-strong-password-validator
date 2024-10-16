//Verifica input password
let campoPassword = document.getElementById("password");
const minNumber = document.getElementById("minNumber");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const special = document.getElementById("special");
const password = [];
campoPassword.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && password.length >= 1) {
    password.pop();
    passwordCheck(password);
  } else {
    if (
      e.key !== "Backspace" &&
      e.key !== "Alt" &&
      e.key !== "Shift" &&
      e.key !== "Control"
    ) {
      password.push(e.key);
      passwordCheck(password);
    }
  }
});

function passwordCheck(pass) {
  if (pass.length >= 9) minNumber.classList.add("success");
  else if (password.length < 9) {
    minNumber.classList.remove("success");
  }

  const containsUpper = /^(?=.*[A-Z]).*$/;
  if (containsUpper.test(pass)) upper.classList.add("success");
  else upper.classList.remove("success");

  const containsNumber = /^(?=.*[0-9]).*$/;
  if (containsNumber.test(pass)) number.classList.add("success");
  else number.classList.remove("success");
}
