var map = L.map('map').setView([47.0016, 2.8], 6.4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: ''
}).addTo(map);


const coordonees = document.getElementById('coordonees');
const marker = L.marker([47.0016, 2.8]).addTo(map);



coordonees.addEventListener('change', function() {
  const x = coordonees.value.split(',')[0];
  const y = coordonees.value.split(',')[1];

  map.setView([x, y], 19);
  marker.setLatLng([x, y]);
});

map.on('click', function(e) {        
  const gps = e.latlng;
  const x = gps.lat;
  const y = gps.lng;  
  marker.setLatLng([x, y]);
  coordonees.value = `${x}, ${y}`;
});

function teleportToMarker(){
  map.setView([marker.getLatLng().lat, marker.getLatLng().lng], 19);
}

function teleportToOrigin(){
  let coo = document.getElementById('coo').innerHTML;
  console.log(coo);
  let x = coo.split(',')[0];
  let y = coo.split(',')[1];
  marker.setLatLng([x, y]);
  coordonees.value = `${x}, ${y}`;
  map.setView([x, y], 15);
}