// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// Accessing the airport GeoJSON URL
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18,
 accessToken: API_KEY
});

streets.addTo(map);

let airportData = "https://raw.githubusercontent.com/<3hunterman3>/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});