document.getElementById("submit-btn").addEventListener("click", function() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }
  let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  alert("Thank you, " + name + "! Your message has been sent.");
});

document.getElementById("newsletterForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let newsletterEmail = document.getElementById("newsletter-email").value;
  let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(newsletterEmail)) {
    alert("Please enter a valid email address.");
    return;
  }
  alert("Thank you for subscribing to our newsletter!");
});

document.getElementById("login-btn").addEventListener("click", function() {
  let loginEmail = document.getElementById("login-email").value;
  let loginPassword = document.getElementById("login-password").value;
  if (loginEmail.trim() === "" || loginPassword.trim() === "") {
    alert("Please enter both email and password.");
    return;
  }
  let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(loginEmail)) {
    alert("Please enter a valid email address.");
    return;
  }
  alert("Login successful!");
});

document.getElementById("register-btn").addEventListener("click", function() {
  let registerEmail = document.getElementById("register-email").value;
  let registerPassword = document.getElementById("register-password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  if (registerEmail.trim() === "" || registerPassword.trim() === "" || confirmPassword.trim() === "") {
    alert("Please fill out all fields.");
    return;
  }
  let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(registerEmail)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (registerPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
  alert("Registration successful!");
});
