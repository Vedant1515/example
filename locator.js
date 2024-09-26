let map;
let geocoder;


function initMap() {
    geocoder = new google.maps.Geocoder();

    const defaultLocation = { lat: -37.8136, lng: 144.9631 };

    map = new google.maps.Map(document.getElementById('map'), {
        center: defaultLocation,
        zoom: 12
    });

    new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: 'Melbourne, Australia'
    });
}

function codeAddress() {
    const address = document.getElementById('location-input').value;

    geocoder.geocode({ address: address }, function(results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

document.getElementById('search-button').addEventListener('click', function() {
    codeAddress();
});

window.onload = initMap;
