
document.addEventListener('DOMContentLoaded', function() {
    function getGreeting() {
        const now = new Date();
        const hour = now.getHours();
        if (hour < 12) {
            return 'Good Morning!';
        } else if (hour < 18) {
            return 'Good Afternoon!';
        } else {
            return 'Good Evening!';
        }
    }

    const greetingElement = document.getElementById('greetingMessage');
    if (greetingElement) {
        greetingElement.textContent = getGreeting();
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            let valid = true;

            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';

            if (!email) {
                document.getElementById('emailError').textContent = 'Email is required.';
                valid = false;
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                valid = false;
            }
            if (!password) {
                document.getElementById('passwordError').textContent = 'Password is required.';
                valid = false;
            }

            if (!valid) {
                event.preventDefault();
            }
        });
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('signupEmail').value;
    const passwordInput = document.getElementById('signupPassword').value;

    if (!emailInput || !passwordInput) {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
});

