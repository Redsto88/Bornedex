// Ouvre l'image en plein écran lors du clic sur l'image
function ouvre(num){
    window.open("bornes/"+bornes[num].nom, '_blank').focus();
}

// Lorsque qu'une borne à été découverte
function definitDecouverteBorne(num, decouverte){
    // Change l'icone du marker
    if(decouverte == true){
        markers[num].setIcon(borneDecouverte);
    }
    else{
        markers[num].setIcon(borneNonDecouverte);
    }

    // Sauvegarde l'id de la borne dans la variable local
    localStorage.setItem("borne" + num, decouverte); 
}

function updateBorne(){
    // Pour chaque borne
    for(var i = 0; i < bornes.length; i++){

        if(localStorage.getItem("borne" + i) == 'true'){
            markers[i].setIcon(borneDecouverte);
        }
        // Sinon
        else{
            markers[i].setIcon(borneNonDecouverte);
        }
    }
}

var map = L.map('map').setView([47.0016, 2.8], 6.4);
// Définit la carte utilisé (openstreetmap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'<a href="https://tinder.com/@enzodeg40">Enzo Degraeve</a> | <a href="https://pierron.iiens.net"> Hugo Pierron </a>'}).addTo(map);

var borneNonDecouverte = L.icon({
    iconUrl: 'lib/leaflet/images/marker-icon.png',
    iconRetinaUrl: 'lib/leaflet/images/marker-icon-2x.png',
    shadowUrl: 'lib/leaflet/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

var borneDecouverte = L.icon({
    iconUrl: 'lib/leaflet/images/marker-icon-green.png',
    iconRetinaUrl: 'lib/leaflet/images/marker-icon-green-2x.png',
    shadowUrl: 'lib/leaflet/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

var markers = [];

var i = 0
bornes.forEach(borne => {
    if (borne.y!=0){
        markers[i] = L.marker([(borne.x == 0) ? i : borne.x, borne.y], { icon: borneNonDecouverte })
        .addTo(map).bindPopup(`
            <img onclick="ouvre(${i})" src="bornes/${borne.nom}" alt ="${borne.nom.replace(".jpg","")}" ><br/>
            <p class="nom">${borne.nom.replace(".jpg","")}</p>
            <p>x: ${Math.round(1000*borne.x)/1000} y: ${Math.round(1000*borne.y)/1000}</p>
            <p>${(borne.alt=="inconnue") ? borne.alt : (borne.alt+" mètres")}</p>
            
            <div class="options">
                <a class="option" href="https://www.google.com/maps/search/?api=1&query=${borne.x}, ${borne.y}" target="_blank">
                    <img src="img/google_maps.svg" alt="Google maps">
                </a>
                
                <div class="option" onclick="definitDecouverteBorne(${i}, false)">
                    <img src="img/none.svg" alt="Non découverte">
                </div>

                <div class="option" onclick="definitDecouverteBorne(${i}, true)">
                    <img src="img/done.svg" alt="Découverte">
                </div>
            </div>
        `);

        document.getElementById('bornelist').innerHTML += `<option value="${borne.nom.replace(".jpg","")}">`;

    }
    i+=1;
    

});

// Définit l'input
const inputlist = document.querySelector('.inputlist');

// Est appellé à chaque fois que la valeur de l'input est changé
inputlist.addEventListener('change', (event) => {
    bornes.forEach(borne => {
        if (borne.y!=0){
            if (event.target.value + ".jpg" == borne.nom){
                map.flyTo([borne.x, borne.y], 17);
                return;
            }
    }
    });
});

updateBorne();