document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "Gersi" && password === "Gersi1990") {
    alert("Login successful!");
  } else {
    alert("Invalid credentials.");
  }
});