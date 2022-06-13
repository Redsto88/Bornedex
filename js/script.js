function ouvre(num){
    window.open("bornes/"+bornes[num].nom, '_blank').focus();



}

var map = L.map('map').setView([47.0016, 2.8], 6.4);
// Définit la carte utilisé (openstreetmap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'<a href="https://tinder.com/@enzodeg40">Enzo Degraeve</a> | <a href="https://pierron.iiens.net"> Hugo Pierron </a>'}).addTo(map);




var i = 0
bornes.forEach(borne => {
    if (borne.y!=0){
        var marker = L.marker([(borne.x==0) ? i : borne.x, borne.y]).addTo(map).bindPopup(`
            <img onclick="ouvre(${i})" src="bornes/${borne.nom}" alt ="${borne.nom.replace(".jpg","")}" ><br/>
            <p class="nom">${borne.nom.replace(".jpg","")}</p>
            <p>Coordonnées :</p>
            <p>x : ${Math.round(1000*borne.x)/1000}, y: ${Math.round(1000*borne.y)/1000}</p>
            <p> Altitude : ${(borne.alt=="inconnue") ? borne.alt : (borne.alt+"m")}</p>
            <a href="https://www.google.com/maps/search/?api=1&query=${borne.x}, ${borne.y}" target="_blank">Google maps</a>
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
