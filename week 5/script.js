const form = document.getElementById("registrationForm");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const successMsg = document.getElementById("successMsg");

function showError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");
  error.textContent = message;
  input.classList.remove("valid");
  input.classList.add("invalid");
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");
  error.textContent = "";
  input.classList.remove("invalid");
  input.classList.add("valid");
}

// Validation functions
function validateName() {
  if (fullname.value.trim() === "") {
    showError(fullname, "Name is required");
    return false;
  }
  showSuccess(fullname);
  return true;
}

function validateEmail() {
  const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!regex.test(email.value.trim())) {
    showError(email, "Enter a valid email");
    return false;
  }
  showSuccess(email);
  return true;
}

function validatePassword() {
  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    return false;
  }
  if (!/[!@#$%^&*]/.test(password.value)) {
    showError(password, "Password must contain a special character");
    return false;
  }
  showSuccess(password);
  return true;
}

function validatePhone() {
  const regex = /^[0-9]{10}$/;
  if (!regex.test(phone.value.trim())) {
    showError(phone, "Enter a 10-digit phone number");
    return false;
  }
  showSuccess(phone);
  return true;
}

// Real-time validation
fullname.addEventListener("input", validateName);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
phone.addEventListener("input", validatePhone);

// Form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateName() & validateEmail() & validatePassword() & validatePhone()) {
    successMsg.textContent = "🎉 Registration Successful!";
    form.reset();
    document.querySelectorAll("input").forEach(i => i.classList.remove("valid"));
  } else {
    successMsg.textContent = "";
  }
});
