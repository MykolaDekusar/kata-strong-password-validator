//Verifica input password
const campoPassword = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");
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
  if (pass.length >= 9) {
    minNumber.classList.add("success");
    minNumber.innerHTML = "&check; At least 9 Chars";
  } else {
    minNumber.classList.remove("success");
    minNumber.innerHTML = "X At least 9 Chars";
  }

  const containsUpper = /[A-Z]/;
  if (containsUpper.test(pass)) {
    upper.classList.add("success");
    upper.innerHTML = "&check; At least one Uppercase";
  } else {
    upper.classList.remove("success");
    upper.innerHTML = "X At least one Uppercase";
  }

  const containsNumber = /[0-9]/;
  if (containsNumber.test(pass)) {
    number.classList.add("success");
    number.innerHTML = "&check; At least one Number";
  } else {
    number.classList.remove("success");
    number.innerHTML = "X At least one Number";
  }

  const containsSpecial = /[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]/;
  if (containsSpecial.test(pass)) {
    special.classList.add("success");
    special.innerHTML = "&check; At least one Special Char";
  } else {
    special.classList.remove("success");
    special.innerHTML = "X At least one Special Char";
  }
}

function showPassword() {
  console.log(campoPassword.type);
  if (campoPassword.type === "password") {
    campoPassword.type = "text";
    togglePasswordButton.textContent = "Hide"; // Change button text to "Hide"
  } else {
    campoPassword.type = "password";
    togglePasswordButton.textContent = "Show"; // Change button text back to "Show"
  }
}
