document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorElement = document.getElementById("error");

    errorElement.textContent = "";

    if (!validateEmail(email)) {
      errorElement.textContent = "Invalid email format.";
      return;
    }

    if (!validatePassword(password)) {
      errorElement.textContent = "Password must be at least 6 characters long.";
      return;
    }

    if (password !== confirmPassword) {
      errorElement.textContent = "Passwords do not match.";
      return;
    }

    if (isEmailRegistered(email)) {
      errorElement.textContent = "Email is already registered.";
      return;
    }

    saveAccount(email, password);
    window.location.href = "login.html";
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function isEmailRegistered(email) {
  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  return accounts.some((account) => account.email === email);
}

function saveAccount(email, password) {
  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  accounts.push({ email: email, password: password });
  localStorage.setItem("accounts", JSON.stringify(accounts));
}
