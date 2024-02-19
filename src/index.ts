document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('emailForm') as HTMLFormElement;
    
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent the actual form submission

        // Add your form data handling logic here

        // Redirect to the thank you page
        window.location.href = 'www.inut.lol/submission.html';
    });
});
