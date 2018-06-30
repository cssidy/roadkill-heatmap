// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

var map, heatmap, mapdata;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 37.775, lng: -122.434},
        mapTypeId: 'satellite'
    });

    mapdata = [
        new google.maps.LatLng(37.782551, -122.445368),
        new google.maps.LatLng(37.782745, -122.444586),
        new google.maps.LatLng(37.782842, -122.443688),
        new google.maps.LatLng(37.782919, -122.442815),
        new google.maps.LatLng(37.782992, -122.442112),
        new google.maps.LatLng(37.783100, -122.441461),
        new google.maps.LatLng(37.783206, -122.440829),
        new google.maps.LatLng(37.783273, -122.440324),
        new google.maps.LatLng(37.783316, -122.440023),
        new google.maps.LatLng(37.783357, -122.439794),
        new google.maps.LatLng(37.783371, -122.439687),
        new google.maps.LatLng(37.783368, -122.439666),
        new google.maps.LatLng(37.783383, -122.439594),
        new google.maps.LatLng(37.783508, -122.439525),
        new google.maps.LatLng(37.783842, -122.439591),
        new google.maps.LatLng(37.784147, -122.439668),
        new google.maps.LatLng(37.784206, -122.439686),
        new google.maps.LatLng(37.784386, -122.439790),
        new google.maps.LatLng(37.784701, -122.439902),
        new google.maps.LatLng(37.784965, -122.439938),
        new google.maps.LatLng(37.785010, -122.439947),
        new google.maps.LatLng(37.785360, -122.439952),
    ];

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: mapdata,
        map: map
    });
}