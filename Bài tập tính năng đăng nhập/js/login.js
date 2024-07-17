function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var toggleIcon = document.querySelector(".toggle-password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.textContent = "🙈";
    } else {
      passwordField.type = "password";
      toggleIcon.textContent = "👁️";
    }
  }

  function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("remember-me").checked;

    if (!email || !password) {
      alert("Email và Password không được bỏ trống");
      return;
    }

    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }
    } else {
      window.location.href = "index.html";
    }
  }

  function forgotPassword() {
    alert("Chức năng này chưa được hỗ trợ");
  }

  function saveAccount(email, password) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }