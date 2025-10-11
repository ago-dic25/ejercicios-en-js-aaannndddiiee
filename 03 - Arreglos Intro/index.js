const canciones = ["corporate-inspiring-motivational-healthcare-410903.mp3", "creepy-devil-dance-166764.mp3", "running-night-393139.mp3", "this-is-halloween-172354.mp3"];

var cancionActual = new Array(1);

var play = document.getElementById("play");
const volumen = document.getElementById("volumen");
var player = document.getElementById("player");

function crearPlaylist(){
    const lista = document.createElement("ol");
    lista.setAttribute("id", "listaMusica");
    for (var song in canciones){
        const item = document.createElement("li");
        item.appendChild(document.createTexteNode(song));
        item.setAttribute("id", canciones.indexOf(song));
        lista.appendChild(item);
    }
    return lista;
}

document.getElementById("playlist").appendChild(crearPlaylist())
var listado = document.getElementById("listaMusica");

function reproduccionA(texto){
    document.getElementById("currentPlay").innerText = texto;
}

listado.addEventListener("click", function(e){
    reproduccionA("Reproduciendo: " + itemClick.innerText);
    loadMusic(itemClick.innerText);
    cancionActual[0] = e.target.id;
    player.play();
});

pausa.addEventListener("click", function(){
    if(player.paused){
        return player.play();
    }else{
        return player.pause();
    }
});