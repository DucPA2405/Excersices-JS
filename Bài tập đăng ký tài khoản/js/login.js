document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");

    errorElement.textContent = "";

    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const account = accounts.find(
      (account) => account.email === email && account.password === password
    );

    if (account) {
      alert("Login successful!");
      // Chuyển hướng tới trang chính sau khi đăng nhập thành công
      window.location.href = "main.html"; // Giả sử bạn có trang main.html
    } else {
      errorElement.textContent = "Invalid email or password.";
    }
  });
