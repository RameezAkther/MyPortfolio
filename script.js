document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        // Add actual form submission logic here, e.g., send the data to a server.
    } else {
        alert('Please fill out all fields.');
    }
});