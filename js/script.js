// Ouvre l'image en plein écran lors du clic sur l'image
function ouvre(num){
    window.open("bornes/"+bornes[num].id+".jpg", '_blank').focus();
}


var compteurtrouvee = 0;

// Lorsque qu'une borne à été découverte
function definitDecouverteBorne(num, decouverte){
    // Change l'icone du marker
    if(decouverte == true){
        markers[num].setIcon(borneDecouverte);
    }
    else if (decouverte == false){
        markers[num].setIcon(borneNonDecouverte);
    }

    // Sauvegarde l'id de la borne dans la variable local
    localStorage.setItem("borne" + num, decouverte);
    updateBorne();
}

function updateBorne(){
    // Pour chaque borne
    compteurtrouvee=0;
    for(var i = 0; i < bornes.length; i++){

        if(localStorage.getItem("borne" + i) == 'true'){
            markers[i].setIcon(borneDecouverte);
            compteurtrouvee++;
        }
        // Sinon
        else{
            markers[i].setIcon(borneNonDecouverte);
        }
    }
    document.getElementById('trouvee').innerHTML = compteurtrouvee + " trouvée(s)";
}


function resetData(){
    // Pour chaque borne
    for(var i = 0; i < bornes.length; i++){
        // Change l'icone du marker
        markers[i].setIcon(borneNonDecouverte);
        // Sauvegarde l'id de la borne dans la variable local
        localStorage.setItem("borne" + i, false);
    }
    updateBorne();
}

function FullData(){
    for(var i = 0; i < bornes.length; i++){
        markers[i].setIcon(borneDecouverte);
        localStorage.setItem("borne" + i, true);
    }
    updateBorne();
}



function showmenu(){
    document.getElementById('menu').style.width = "250px";
    document.getElementById('menu-container').style.display = "flex";
    document.getElementById('menu').style.borderRight = "#172741 solid 2px"
}

function closemenu(){
    document.getElementById('menu').style.width = "0px";
    document.getElementById('menu-container').style.display = "none";
    document.getElementById('menu').style.borderRight = "#172741 solid 0px"
    document.getElementById('copie').innerHTML = "";
    document.getElementsByClassName('import-save')[0].value = "";
}

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return parms;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

function setGetParam(key,value) {
    if (history.pushState) {
      var params = new URLSearchParams(window.location.search);
      params.set(key, value);
      var newUrl = window.location.origin 
            + window.location.pathname 
            + '?' + params.toString();
      window.history.pushState({path:newUrl},'',newUrl);
    }
  }


function copylink(){
    navigator.clipboard.writeText(window.location.href);
    alert("Lien copié !")
}



function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }


 function hex2bin(hex) {
    let bin = "";
    let bitsInHex = 4;
  
    Array.from(hex).forEach(
      function (char) {
        let currentBin = parseInt(char, 16).toString(2);
  
        if (currentBin.length < bitsInHex) {
          let padding = "0".repeat(bitsInHex-currentBin.length);
          currentBin = padding + currentBin;
        }
  
        bin += currentBin;
      }
    );
    if(bin.length-bornes.length>3){
        return bin
    }
    return bin.slice(0,bornes.length);
  }
  
  function bin2hex(bin) {
    let hex = "";
    let bitsInHex = 4;
  
    for (let i = 0; i < bin.length; i = i + bitsInHex) {
      let eightBits = bin.substr(i, bitsInHex);
      let currentHex = (parseInt(eightBits, 2)).toString(16).toUpperCase();
      hex += currentHex;
    }
    
    return hex;
  }


function exportSave(){
    var save = "";
    for(var i = 0; i < bornes.length; i++){
        if (localStorage.getItem("borne" + i) == 'true'){
            save += "1";
        }
        else{
            save += "0";
        }
    }
    save = bin2hex(save)
    navigator.clipboard.writeText(save);
    document.getElementById('copie').innerHTML = "Copié dans le presse-papier !";
}


function importSave(){
    var save = document.getElementsByClassName('import-save')[0].value;
    save = hex2bin(save)
    if(save.length == bornes.length){
        for(var i = 0; i < bornes.length; i++){
            if(save[i] == "1"){
                definitDecouverteBorne(i, true);
            }
            else{
                definitDecouverteBorne(i, false);
            }
        }
    }
    else{
        alert("Sauvegarde invalide");
    }
    document.getElementsByClassName('import-save')[0].value = "";
}


let url = window.location.href;
let params = parseURLParams(url)

if("Lat" in params && "Lng" in params && "zoom" in params){
    var map = L.map('map').setView([params.Lat[0], params.Lng[0]], params.zoom[0]);
}
else{
    var map = L.map('map').setView([47.0016, 2.8], 6.4);
}

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
            <img onclick="ouvre(${i})" src="bornes/${borne.id}.jpg" alt ="${borne.nom}" ><br/>
            <p class="nom">${borne.nom}</p>
            <p>x: ${Math.round(1000*borne.x)/1000} y: ${Math.round(1000*borne.y)/1000}</p>
            <p>altitude : ${(borne.alt=="inconnue") ? borne.alt : (borne.alt+" mètres")}</p>
            
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

        document.getElementById('bornelist').innerHTML += `<option value="${borne.nom}">`;

    }
    i+=1;

});

document.getElementById('total').innerHTML = "Total : " + bornes.length;

// Définit l'input
const inputlist = document.querySelector('.inputlist');

// Est appellé à chaque fois que la valeur de l'input est changé
inputlist.addEventListener('change', (event) => {
    bornes.forEach(borne => {
        if (borne.y!=0){
            if (event.target.value == borne.nom){
                map.flyTo([borne.x, borne.y], 17);
                return;
            }
    }
    });
});

updateBorne();

document.getElementsByClassName('leaflet-control-zoom leaflet-bar leaflet-control')[0].style.marginTop = "50px";


map.on('moveend', function(){
    var url = window.location.href;
    var params = parseURLParams(url)
    params.Lat = map.getCenter().lat;
    params.Lng = map.getCenter().lng;
    params.zoom = map.getZoom();
    window.history.pushState("", "", '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&'));
});