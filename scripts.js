document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you, ' + document.getElementById('name').value + '! Your message has been sent.');
});
