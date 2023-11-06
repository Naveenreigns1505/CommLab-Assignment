const form = document.querySelector(".form");

function openForm() {
  document.getElementById("registration-form-container").style.display =
    "block";
  setTimeout(() => {
    formContainer.classList.add("active");
  }, 50);
}

function closeForm() {
  document.getElementById("registration-form-container").style.display = "none";
  setTimeout(() => {
    formContainer.style.display = "none";
  }, 2000);
}

const buttons = document.querySelectorAll(".open-form-button");
buttons.forEach((button) => {
  button.addEventListener("click", openForm);
});

function validateForm() {
  var email = document.getElementById("email").value;
  var error = document.getElementById("error-msg");
  var emailRegex = /^[a-zA-Z0-9._%+-]+@yourdomain.com$/;
  if (!emailRegex.test(email)) {
    error.textContent =
      "Please enter your business email address. This form only accepts email addresses from yourdomain.com.";
    return false;
  }
  return true;
}

function displaySuccessMessage() {
  const successMsg = document.getElementById("success-msg");
  successMsg.style.display = "block";
  setTimeout(function () {
    successMsg.style.display = "none";
  }, 2000);
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  displaySuccessMessage();
});
