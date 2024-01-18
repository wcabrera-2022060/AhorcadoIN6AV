const palabras = [computadora, teclado, mouse];
letrasUsadas = [];
var intentos = 0;
palabraRandom = Math.floor(Math.random() * palabras);

var canvas = document.getElementById("dibujo");
var dibujar = canvas.getContext("2d");

