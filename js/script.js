function initMap() {
    var uluru = {
        lat: 46.370574,
        lng: 30.726115
    };
   
     var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        animation: google.maps.Animation.BOUNCE
    });
}
