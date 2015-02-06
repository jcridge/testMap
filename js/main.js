$(document).on("pageshow", "#page2", function(event){
    console.log("Page Show");
    changeSize();
    initialize();
    google.maps.event.trigger(map, 'resize');
});

//$(document).ready(function () {
    //changeSize();
//});

function changeSize() {
    var bodyheight = $(window).height();
    console.log(bodyheight);
    $("#map-canvas").height(bodyheight - 60);
    $(window).resize(function () {
        var bodyheight = $(window).height();
        $("#map-canvas").height(bodyheight - 60);
    });
}


	  function initialize() {
          console.log("Drawing Map");
          var mapOptions = {
            center: { lat: -34.397, lng: 150.644},
            zoom: 8,
            disableDefaultUI: true
          };
          var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
      
          // Try HTML5 geolocation
          if(navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                  var pos = new google.maps.LatLng(position.coords.latitude,
                                                   position.coords.longitude);
                  var marker = new google.maps.Marker({
                      position: pos,
                      map: map,
                  });
                  
                  map.setCenter(pos);
              }, 
            function() {
                  handleNoGeolocation(true);
              });
          } 
          else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
      }
          
      }
	  


