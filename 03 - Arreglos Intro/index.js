const canciones = ["corporate-inspiring-motivational-healthcare-410903.mp3", "creepy-devil-dance-166764.mp3", "running-night-393139.mp3", "this-is-halloween-172354.mp3"];

var cancionActual = new Array(1);
var nombre = document.getElementById("n_song");

const audio = document.getElementById("audio");
const pausePlay = document.getElementById("play");

function crearPlaylist(){
    const lista = document.createElement("ol");
    lista.setAttribute("id", "listaMusica");
    for (let i = 0; i < canciones.length; i++){
        const item = document.createElement("li");
        item.textContent = canciones[i]; // más limpio que createTextNode
        item.dataset.index = i;
        lista.appendChild(item);
        lista.appendChild(item);
    }
    return lista;
}

function loadMusic(ruta){
    var source = document.getElementById("source");
    var folder = "musica";
    source.src = folder + "/" + ruta;
}

document.getElementById("playlist").appendChild(crearPlaylist());

pausePlay.addEventListener("click", function(){
    if(audio.paused || audio.ended){
        audio.play();
    }else{
        audio.pause();
    }
});

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

