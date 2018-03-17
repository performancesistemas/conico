var key="AIzaSyDdBGiBE7K-uhCJxw2I-1XivgaSgtHk7cg"
var googleMapsAPI="AIzaSyATz86jdBrAnp18QhKdTfv-yeEgOdd_YaM"

var latitude;
var longitude;


window.onload = function(){
    initMap();
}

function initMap(){
    console.log("Calling: navigator.geolocation.getCurrentPosition()");
    options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(success, error);
}    

function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("latitude:", latitude, "longitude:", longitude);

    var mapOptions = {
        center: { lat: latitude, lng: longitude},
        zoom: 15
    }; 

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    

}

function error(e) {
    console.log(e);
    alert(e);
}