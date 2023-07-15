// alert("gbemidebe")
// Function to handle login form submission
function login(e) {
    e.preventDefault(); // Prevent form submission
  
    // Retrieve username and password values
    const usernameOrEmail = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    // Retrieve stored username and password from local storage
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
  
    // Compare the entered credentials with stored values
    if (
        (usernameOrEmail === storedUsername || usernameOrEmail ===storedEmail) && password === storedPassword) {
      confirm('Login successful!');
      window.location.href = 'home.html';
    } else {
      alert('Invalid username or password!');
    }
    document.getElementById("login-form").reset();
  }
  
  // Attach event listener to the login form submit button
  document.getElementById('login-form').addEventListener('submit', login);

  document.getElementById('show-password').addEventListener('change', function() {
    const passwordInput = document.getElementById('login-password');
    passwordInput.type = this.checked ? 'text' : 'password';
  });
  
  