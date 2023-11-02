var modal = document.getElementById("myModal");

function openForm() {
  modal.style.display = "block";
}

function closeForm() {
  modal.style.display = "none";
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    document.getElementById("registrationForm").reset();
  });
