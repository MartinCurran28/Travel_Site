function initialize() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: new google.maps.LatLng(46.619261, -33.134766),
        zoom: 3
    });

    var service = new google.maps.places.PlacesService(map);

    service.getDetails({
        placeId: 'ChIJod7tSseifDUR9hXHLFNGMIs'
    }, function (place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {

            // Create marker
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });

            // Center map on place location
            map.setCenter(place.geometry.location);

            // Get DIV element to display opening hours
            var opening_hours_div = document.getElementById("opening-hours");

            // Loop through opening hours weekday text
            for (var i = 0; i < place.opening_hours.weekday_text.length; i++) {

                // Create DIV element and append to opening_hours_div
                var content = document.createElement('div');
                content.innerHTML = place.opening_hours.weekday_text[i];
                opening_hours_div.appendChild(content);
            }
        }
    });
}

initialize();