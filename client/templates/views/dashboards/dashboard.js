Template.dashboard.onRendered(function(){


    // Options for Google map
    // More info see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions1 = {
        zoom: 14,
        center: new google.maps.LatLng(40.6700, -73.9400),
        // Style for Google Maps
        styles: [{"featureType":"landscape"}]
    };
    
    var myMap = new google.maps.Map(document.getElementById('mymap'), mapOptions1);
    
    var infoWindow = new google.maps.InfoWindow({map: myMap});

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('You are here');
          myMap.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, myMap.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, myMap.getCenter());
      }


    var bounds = new google.maps.LatLngBounds();

  
   

    
});

Template.dashboard.helpers({
	aroundMap: function(){
		
	}
	});