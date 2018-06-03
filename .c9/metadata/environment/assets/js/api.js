{"changed":true,"filter":false,"title":"api.js","tooltip":"/assets/js/api.js","value":"var map, placesList;\nvar infowindow;\nvar service; //declare globally\n\n\nfunction initialize() {\n  var pyrmont = new google.maps.LatLng(40.062664, -83.069101);\n\n  map = new google.maps.Map(document.getElementById('map-canvas'), {\n    center: pyrmont,\n    zoom: 15\n  });\n\n  var request = {\n    location: pyrmont,\n    radius: 500,\n    types: ['store']\n  };\n  infowindow = new google.maps.InfoWindow();\n   placesList = document.getElementById('places');\n service = new google.maps.places.PlacesService(map);\n  service.nearbySearch(request, callback);\nservice.getDetails(request, callback);\n\n}\n\nfunction callback(results, status) {\n  if (status == google.maps.places.PlacesServiceStatus.OK) {\n    for (var i = 0; i < results.length; i++) {\n      createMarker(results[i]);\n    }\n  }\n}\n\nfunction createMarker(place) {\n  var placeLoc = place.geometry.location;\n  var marker = new google.maps.Marker({\n  map: map,\n  position: place.geometry.location\n });\n\nvar request = { placeId: place.place_id };\nservice.getDetails(request, function(details, status) {\n  google.maps.event.addListener(marker, 'click', function() {\n    infowindow.setContent(details.name + \"<br />\" + details.formatted_address +\"<br />\" + details.website + \"<br />\" + details.rating + \"<br />\" + details.formatted_phone_number);\n    infowindow.open(map, this);\n   });\n });\n placesList.innerHTML += '<li>' + place.name  + '</li>';\n}\n\n\n\ngoogle.maps.event.addDomListener(window, 'load', initialize);\n","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":54,"column":0},"action":"insert","lines":["var map, placesList;","var infowindow;","var service; //declare globally","","","function initialize() {","  var pyrmont = new google.maps.LatLng(40.062664, -83.069101);","","  map = new google.maps.Map(document.getElementById('map-canvas'), {","    center: pyrmont,","    zoom: 15","  });","","  var request = {","    location: pyrmont,","    radius: 500,","    types: ['store']","  };","  infowindow = new google.maps.InfoWindow();","   placesList = document.getElementById('places');"," service = new google.maps.places.PlacesService(map);","  service.nearbySearch(request, callback);","service.getDetails(request, callback);","","}","","function callback(results, status) {","  if (status == google.maps.places.PlacesServiceStatus.OK) {","    for (var i = 0; i < results.length; i++) {","      createMarker(results[i]);","    }","  }","}","","function createMarker(place) {","  var placeLoc = place.geometry.location;","  var marker = new google.maps.Marker({","  map: map,","  position: place.geometry.location"," });","","var request = { placeId: place.place_id };","service.getDetails(request, function(details, status) {","  google.maps.event.addListener(marker, 'click', function() {","    infowindow.setContent(details.name + \"<br />\" + details.formatted_address +\"<br />\" + details.website + \"<br />\" + details.rating + \"<br />\" + details.formatted_phone_number);","    infowindow.open(map, this);","   });"," });"," placesList.innerHTML += '<li>' + place.name  + '</li>';","}","","","","google.maps.event.addDomListener(window, 'load', initialize);",""],"id":1}]]},"ace":{"folds":[],"scrolltop":338,"scrollleft":0,"selection":{"start":{"row":54,"column":0},"end":{"row":54,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":23,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1527643246029}