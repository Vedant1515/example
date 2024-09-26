// JavaScript to toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode preference is saved in local storage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    document.querySelector('footer').classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    document.querySelector('footer').classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    document.querySelector('header').classList.remove('dark-mode');
    document.querySelector('footer').classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
}

// Event listener for the toggle
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
