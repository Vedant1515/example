const toggle = document.getElementById('darkModeToggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Load dark mode state from localStorage (if available)
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
}

// Function to enable dark mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    document.querySelectorAll('.container, .product').forEach(el => {
        el.classList.add('dark-mode');
    });
    toggle.checked = true;
    localStorage.setItem('dark-mode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    document.querySelectorAll('.container, .product').forEach(el => {
        el.classList.remove('dark-mode');
    });
    toggle.checked = false;
    localStorage.setItem('dark-mode', 'disabled');
}

// Event listener for the dark mode toggle
toggle.addEventListener('change', function () {
    if (this.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    
    // Check local storage for saved theme
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        toggle.checked = false;
    }
    
    // Add event listener for the toggle
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            document.querySelectorAll('.signup-box, .account-box, .team-member, .team-info, .container').forEach(el => {
                el.classList.add('dark-mode');
            });
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelectorAll('.signup-box, .account-box, .team-member, .team-info, .container').forEach(el => {
                el.classList.remove('dark-mode');
            });
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    
    // Check local storage for saved theme
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
        document.querySelectorAll('.signup-box, .account-box, .contact-container, .contact-info, .feedback-form, .team-member, .team-info, .container').forEach(el => {
            el.classList.add('dark-mode');
        });
    } else {
        document.body.classList.remove('dark-mode');
        toggle.checked = false;
        document.querySelectorAll('.signup-box, .account-box, .contact-container, .contact-info, .feedback-form, .team-member, .team-info, .container').forEach(el => {
            el.classList.remove('dark-mode');
        });
    }
    
    // Add event listener for the toggle
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            document.querySelectorAll('.signup-box, .account-box, .contact-container, .contact-info, .feedback-form, .team-member, .team-info, .container').forEach(el => {
                el.classList.add('dark-mode');
            });
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelectorAll('.signup-box, .account-box, .contact-container, .contact-info, .feedback-form, .team-member, .team-info, .container').forEach(el => {
                el.classList.remove('dark-mode');
            });
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    
    // Check local storage for saved theme
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
        document.querySelectorAll('#location-form, input[type="text"], select, button').forEach(el => {
            el.classList.add('dark-mode');
        });
    } else {
        document.body.classList.remove('dark-mode');
        toggle.checked = false;
        document.querySelectorAll('#location-form, input[type="text"], select, button').forEach(el => {
            el.classList.remove('dark-mode');
        });
    }
    
    // Add event listener for the toggle
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            document.querySelectorAll('#location-form, input[type="text"], select, button').forEach(el => {
                el.classList.add('dark-mode');
            });
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelectorAll('#location-form, input[type="text"], select, button').forEach(el => {
                el.classList.remove('dark-mode');
            });
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    
    // Check local storage for saved theme
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
        applyDarkModeStyles();
    } else {
        document.body.classList.remove('dark-mode');
        toggle.checked = false;
        removeDarkModeStyles();
    }
    
    // Add event listener for the toggle
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
            applyDarkModeStyles();
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
            removeDarkModeStyles();
        }
    });
});

function applyDarkModeStyles() {
    document.querySelectorAll('#promo-banner, #featured-products, #latest-deals, #store-news').forEach(el => {
        el.classList.add('dark-mode');
    });
    document.querySelectorAll('input[type="text"], select, button').forEach(el => {
        el.classList.add('dark-mode');
    });
}

function removeDarkModeStyles() {
    document.querySelectorAll('#promo-banner, #featured-products, #latest-deals, #store-news').forEach(el => {
        el.classList.remove('dark-mode');
    });
    document.querySelectorAll('input[type="text"], select, button').forEach(el => {
        el.classList.remove('dark-mode');
    });
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('Dark mode script loaded');
    const toggle = document.getElementById('darkModeToggle');

    if (toggle) {
        console.log('Dark mode toggle found');
    }

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        toggle.checked = false;
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});

let map;
let darkModeStyles = [
  { elementType: "geometry", stylers: [{ color: "#212121" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#757575" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#383838" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212121" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3d3d3d" }] }
];

function initMap() {
  const mapOptions = {
    center: { lat: 40.7128, lng: -74.0060 }, // Example coordinates (New York City)
    zoom: 12,
    styles: document.body.classList.contains('dark-mode') ? darkModeStyles : [], // Apply dark mode styles if active
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Update the map styles on dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('change', function() {
    const isDarkMode = darkModeToggle.checked;
    map.setOptions({ styles: isDarkMode ? darkModeStyles : [] });
  });
}

window.initMap = initMap;
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if dark mode was previously set
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggle.checked = true;
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
