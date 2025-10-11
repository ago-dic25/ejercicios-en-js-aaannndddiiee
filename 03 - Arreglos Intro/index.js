const canciones = ["corporate-inspiring-motivational-healthcare-410903.mp3", "creepy-devil-dance-166764.mp3", "running-night-393139.mp3", "this-is-halloween-172354.mp3"];

var cancionActual = [0];

var nombre = document.getElementById("n_song");
const audio = document.getElementById("audio");
const antSong = document.getElementById("ant");
const pausePlay = document.getElementById("play");
const sigSong = document.getElementById("sig");
var nombre = document.getElementById("n_song");

function crearPlaylist(){
    const lista = document.createElement("ol");
    lista.setAttribute("id", "listaMusica");
    for (let i = 0; i < canciones.length; i++){
        const item = document.createElement("li");
        item.textContent = canciones[i]; 
        item.dataset.index = i;
        lista.appendChild(item);
    }
    return lista;
}

function loadMusic(ruta){
    var source = document.getElementById("source");
    var folder = "musica";
    source.src = folder + "/" + ruta;
    audio.load();
    nombre.textContent = ruta;
}

document.getElementById("playlist").appendChild(crearPlaylist());

loadMusic(canciones[0]);

pausePlay.addEventListener("click", function(){
    if(audio.paused || audio.ended){
        audio.play();
    }else{
        audio.pause();
    }
});


function nextSong(){
    const source = document.getElementById("source");
    var actual = Number(cancionActual[0]);
    if(canciones.length == (actual + 1)){
        var sig = 0;
    }else{
        var sig = actual + 1;
    }
    cancionActual[0] = sig;
    loadMusic(canciones[sig]);
}

function prevSong(){
    const source = document.getElementById("source");
    var actual = Number(cancionActual[0]);
    if(actual == 0){
        var ant = canciones.length - 1;
    }else{
        var ant = actual - 1;
    }
    cancionActual[0] = ant;
    loadMusic(canciones[ant]);
}

antSong.addEventListener("click", prevSong);

sigSong.addEventListener("click", nextSong);
