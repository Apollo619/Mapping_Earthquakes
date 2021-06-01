// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// create a base layer that hold both maps
let baseMaps = {
  Streets: streets,
  Satellite: satelliteStreets
};

let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});

// pass our map layers into our layer contorl and add the layer control to the map
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let earthquakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"


// Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor: 'yellow',
  opacity: 0.5,
  weight: 1
}

// Grabbing our GeoJSON data.
d3.json(earthquakes).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data)
  .addTo(map);
});
