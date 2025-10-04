let secuencia = [];
let rep = document.getElementById("reproducir");
let lim = document.getElementById("limpiar");

document.addEventListener('keydown', function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //if(!audio) return;
    audio.play();
    guardarSecuencia(e.keyCode);
});

function guardarSecuencia(codigoTecla){
    secuencia.push(codigoTecla);
}

function reproducirSecuencia(){
    let con = 0;
    for(let code of secuencia){
        con += 1;
        let audio = document.querySelector(`audio[data-key="${code}"]`);
        setTimeout(function(){
            audio.play();
        }, con * 500);
    }
}

function limpiarSecuencia(){
    secuencia = []
}

rep.addEventListener("click", reproducirSecuencia);

lim.addEventListener("click", limpiarSecuencia);

