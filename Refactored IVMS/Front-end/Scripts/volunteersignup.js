document
  .getElementById("volunteerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    if (name && email && password && phone) {
      alert("Volunteer Signed Up Successfully!");
      // You can add additional actions such as sending data to a server here.
    } else {
      alert("Please fill in all fields.");
    }
  });

// Show password
const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("showPassword");

showPasswordCheckbox.addEventListener("change", function () {
  if (this.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
