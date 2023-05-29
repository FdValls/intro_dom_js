"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener todos los botones utilizando su clase o ID
y asignarle el evento de mouse "click"

Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)

*/

//Ejercicio 1
const btns = document.querySelectorAll(".btn")
console.log(btns)

btns.forEach(function(button) {
    button.addEventListener("mouseover", function() {
        // this.classList.add('hover');
        button.classList.add("fuego")

    })
    button.addEventListener("mouseout", function() {
        // this.classList.remove('hover');
        button.classList.remove("fuego")
    })
})