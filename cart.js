document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const header = document.querySelector('header');
    const cartHeader = document.querySelector('h2');
    
    // Check local storage for dark mode preference
    const darkModePreference = localStorage.getItem('dark-mode') === 'true';

    // Set dark mode if preference is saved
    if (darkModePreference) {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        cartHeader.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('change', function () {
        const isChecked = darkModeToggle.checked;
        body.classList.toggle('dark-mode', isChecked);
        header.classList.toggle('dark-mode', isChecked);
        cartHeader.classList.toggle('dark-mode', isChecked);
        // Save the preference in local storage
        localStorage.setItem('dark-mode', isChecked);
    });
});
