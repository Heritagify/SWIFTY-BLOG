// Retrieve user data from local storage or initialize an empty array
var userData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

function renderUserTable() {
    var userTableBody = document.querySelector('#userTable tbody');

    // Clear existing table rows
    userTableBody.innerHTML = '';

    // Render table rows with user data
    userData.forEach(function(user) {
        var row = document.createElement('tr');
        row.setAttribute('data-user-id', user.id);

        var userIdCell = document.createElement('td');
        userIdCell.textContent = user.id;
        row.appendChild(userIdCell);

        var emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        var nameCell = document.createElement('td');
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

        var roleCell = document.createElement('td');
        roleCell.textContent = user.role;
        row.appendChild(roleCell);

        var actionsCell = document.createElement('td');
        var editButton = document.createElement('editBtn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editUser(user.id);
        });
        actionsCell.appendChild(editButton);

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteUser(user.id);
        });
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);

        userTableBody.appendChild(row);
    });
}

function editUser(userId) {
    // Perform action for editing user with the given userId
    console.log('Edit User:', userId);
    // Redirect to the edit user page with the userId as a parameter
    // Replace 'editUser.html' with your actual edit user page URL
    window.location.href = 'editUser.html?userId=' + userId;
}

function deleteUser(userId) {
    // Perform action for deleting user with the given userId
    console.log('Delete User:', userId);
    // Confirm deletion
    if (confirm('Are you sure you want to delete this user?')) {
        // Delete the user from userData array
        var updatedUserData = userData.filter(function(user) {
            return user.id !== userId;
        });

        // Update local storage and re-render the table
        localStorage.setItem('users', JSON.stringify(updatedUserData));
        userData = updatedUserData;
        renderUserTable();
    }
}

// Render the initial table on page load
renderUserTable();