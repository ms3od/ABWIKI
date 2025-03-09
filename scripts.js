// scripts.js

// Function to display a welcome message
function displayWelcomeMessage() {
    alert("Welcome to our website!");
}

// Function to change the background color of the page
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Event listener to display the welcome message when the page loads
window.onload = function() {
    displayWelcomeMessage();
};

// Example usage: Change the background color to lightblue
changeBackgroundColor('lightblue');