document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check for saved user preference, if any
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        updateHeaderAndNav();
    }

    darkModeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            updateHeaderAndNav();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            updateHeaderAndNav();
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    function updateHeaderAndNav() {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');

        if (document.body.classList.contains('dark-mode')) {
            header.classList.add('dark-mode');
            nav.classList.add('dark-mode');
        } else {
            header.classList.remove('dark-mode');
            nav.classList.remove('dark-mode');
        }
    }
});
darkModeToggle.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        updateHeaderAndNav();
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        updateHeaderAndNav();
        localStorage.setItem('darkMode', 'disabled');
    }
});
