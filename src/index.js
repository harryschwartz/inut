"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('emailForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the actual form submission
        // Add your form data handling logic here
        // Redirect to the thank you page
        window.location.href = 'www.inut.lol/submission.html';
    });
});
