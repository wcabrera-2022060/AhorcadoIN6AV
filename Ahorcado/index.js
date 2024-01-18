const palabras = ["computadora", "teclado", "mouse", "monitor", "laptop"];
letrasUsadas = [];
var intentos = 6;
palabraRandom = obtenerPalabraRandom();
palabraOculta = ocultarPalabra(palabraRandom);
juegoTerminado = false;


var canvas = document.getElementById("dibujo");
var dibujar = canvas.getContext("2d");

document.getElementById("oportunidades").innerHTML = intentos;

function obtenerPalabraRandom(){
    return palabras[Math.floor(Math.random() * palabras.length)];
}

document.getElementById("palabraOculta").innerHTML = palabraOculta;

function registroLetras(letraNueva){
    if(letrasUsadas.includes(letraNueva)){
        alert("letra ya usada");
    }else{
        letrasUsadas.push(letraNueva);
        document.getElementById("letrasUsadas").innerHTML = letrasUsadas;

        if(palabraRandom.includes(letraNueva)){
            for(let i; i<palabraOculta.length;i++){
                
            }
        }
    }
}

function ocultarPalabra(palabra){
    return palabra.split("").map(letra => "_");
}