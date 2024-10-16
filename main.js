//Verifica input password
let campoPassword = document.getElementById("password");
const minNumber = document.getElementById("minNumber");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const special = document.getElementById("special");
const password = [];
campoPassword.addEventListener("keydown", (e) => {
  const availableInput = /[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]/;
  const ignoredKeys = ["Control", "Tab", "CapsLock", "Shift", "Alt"];

  if (ignoredKeys.includes(e.key)) {
    // Ignore these keys and do nothing
    return;
  }
  if (e.key === "Backspace" && password.length >= 1) {
    password.pop();
  } else if (availableInput.test(e.key) && e.key !== "Backspace") {
    password.push(e.key);
  }

  passwordCheck(password.join(""));
});

function passwordCheck(pass) {
  if (pass.length >= 9) minNumber.classList.add("success");
  else minNumber.classList.remove("success");

  const containsUpper = /[A-Z]/;
  if (containsUpper.test(pass)) upper.classList.add("success");
  else upper.classList.remove("success");

  const containsNumber = /[0-9]/;
  if (containsNumber.test(pass)) number.classList.add("success");
  else number.classList.remove("success");

  const containsSpecial = /[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]/;
  if (containsSpecial.test(pass)) special.classList.add("success");
  else special.classList.remove("success");
}
