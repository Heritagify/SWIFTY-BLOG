// signup.js
// Function to handle signup form submission
function signup(e) {
    e.preventDefault(); // Prevent form submission
  
    // Retrieve username and password values
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const email = document.getElementById('signup-email').value;
  
    // Store username and password in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
  
    alert('Signup successful!');
    window.location.href = 'signIn.html';
  }
  
  // Attach event listener to the signup form submit button
  document.getElementById('signup-form').addEventListener('submit', signup);
  