"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "agua"

*/

//Ejercicio 1 
const btn1 = document.getElementById("boton1").innerText = "PEGAR";
const btn2 = document.getElementById("boton2").innerText = "COPIAR";
const btn3 = document.getElementById("boton3").innerText = "CORTAR";

//Ejercicio 2
const btns = document.querySelectorAll(".btn")
console.log(btns)

btns.forEach(function(button) {
    button.classList.add("agua")
})