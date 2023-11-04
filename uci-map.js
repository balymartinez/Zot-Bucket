// map that holds coordinate for aldrichpark/UCI
var map = L.map('map').setView([33.6459647, -117.8427597], 16.44);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);