//Verifica input password
const campoPassword = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");
const minNumber = document.getElementById("minNumber");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const special = document.getElementById("special");
const progressBar = document.getElementById("innerBar");
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
  const info = [0, 0, 0, 0];
  if (pass.length >= 9) {
    minNumber.classList.add("success");
    minNumber.innerHTML = "&check; At least 9 Chars";
    info[0] = 1;
  } else {
    minNumber.classList.remove("success");
    minNumber.innerHTML = "X At least 9 Chars";
    info[0] = 0;
  }

  const containsUpper = /[A-Z]/;
  if (containsUpper.test(pass)) {
    upper.classList.add("success");
    upper.innerHTML = "&check; At least one Uppercase";
    info[1] = 1;
  } else {
    upper.classList.remove("success");
    upper.innerHTML = "X At least one Uppercase";
    info[1] = 0;
  }

  const containsNumber = /[0-9]/;
  if (containsNumber.test(pass)) {
    number.classList.add("success");
    number.innerHTML = "&check; At least one Number";
    info[2] = 1;
  } else {
    number.classList.remove("success");
    number.innerHTML = "X At least one Number";
    info[2] = 0;
  }

  const containsSpecial = /[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]/;
  if (containsSpecial.test(pass)) {
    special.classList.add("success");
    special.innerHTML = "&check; At least one Special Char";
    info[3] = 1;
  } else {
    special.classList.remove("success");
    special.innerHTML = "X At least one Special Char";
    info[3] = 0;
  }

  barCheck(info);
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

function barCheck(info) {
  console.log(info);
  let progress = 0;
  for (let i = 0; i < info.length; i++) {
    if (info[i]) progress++;
  }
  if (progress == 1) progressBar.classList.add("oneOfFour");
  else progressBar.classList.remove("oneOfFour");

  if (progress == 2) progressBar.classList.add("twoOfFour");
  else progressBar.classList.remove("twoOfFour");

  if (progress == 3) progressBar.classList.add("threeOfFour");
  else progressBar.classList.remove("threeOfFour");

  if (progress == 4) progressBar.classList.add("fourOfFour");
  else progressBar.classList.remove("fourOfFour");
}
