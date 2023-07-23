 // Retrieve user data from local storage or initialize an empty array
 var userData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

 function getQueryParam(param) {
     var urlParams = new URLSearchParams(window.location.search);
     return urlParams.get(param);
 }

 function fillFormWithUserData(userId) {
     var user = userData.find(function(user) {
         return user.id === userId;
     });

     if (user) {
         document.getElementById('userId').value = user.id;
         document.getElementById('editEmail').value = user.email;
         document.getElementById('editName').value = user.name;
         document.getElementById('editUserRole').value = user.role;
     }
 }

 function editUser(event) {
     event.preventDefault(); // Prevent form submission

     // Get form input values
     var userId = document.getElementById('userId').value;
     var email = document.getElementById('editEmail').value;
     var name = document.getElementById('editName').value;
     var role = document.getElementById('editUserRole').value;
     var newPassword = document.getElementById('editPassword').value;

     // Find the user in the userData array
     var userIndex = userData.findIndex(function(user) {
         return user.id === userId;
     });

     if (userIndex !== -1) {
         // Update user data
         userData[userIndex].email = email;
         userData[userIndex].name = name;
         userData[userIndex].role = role;
         if (newPassword !== '') {
             userData[userIndex].password = newPassword;
         }

         // Update local storage with the updated user data
         localStorage.setItem('users', JSON.stringify(userData));

         // Optionally, you can display a success message or perform other actions
         alert('User updated successfully!');
     } else {
         alert('User not found!');
     }
 }

 // Get the userId from the URL query parameters
 var userId = getQueryParam('userId');

 // Fill the edit user form with the user data
 fillFormWithUserData(userId);

 // Add event listener to the form submit button
 document.getElementById('editUserBtn').addEventListener('click', editUser);