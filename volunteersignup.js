
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


// Show password
const confirmpasswordInput = document.getElementById("confirmpassword");
const confrimshowPasswordCheckbox = document.getElementById("confirmshowpassword");

confrimshowPasswordCheckbox.addEventListener("change", function(){
  if (this.checked) {
    confirmpasswordInput.type = "text";
  } else {
    confirmpasswordInput.type = "password";
  }
});
