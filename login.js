const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('showPassword');

    showPasswordCheckbox.addEventListener('change', function() {
      if (this.checked) {
        passwordInput.type = 'text'; // Show password
      } else {
        passwordInput.type = 'password'; // Hide password
      }
    });