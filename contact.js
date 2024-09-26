document.getElementById('contact-form').addEventListener('submit', function(event) {
    let isValid = true;

    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    const namePattern = /^[A-Za-z\s]{1,50}$/;

    if (!namePattern.test(nameInput.value)) {
        isValid = false;
        nameError.textContent = 'Please enter a valid name (letters and spaces only, max 50 characters).';
    } else {
        nameError.textContent = '';
    }

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    if (!emailInput.validity.valid) {
        isValid = false;
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }

    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('message-error');

    if (messageInput.value.length < 10) {
        isValid = false;
        messageError.textContent = 'Message must be at least 10 characters long.';
    } else {
        messageError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});
