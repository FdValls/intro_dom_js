"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

1)(
Leer el título del "header" del post e imprimirlo en consola.   

2)
Cambiar título utilizando javascript por otro cualquiera.

*/

//Ejercicio 1
const titleHeader = document.querySelector('.post-header')
console.log(titleHeader)

//Ejercicio 2
titleHeader.textContent = "HelloWorld"