"use strict";
/* Escribir el código aquí */

// ----------------------------------------------------
// Apuntamos a nuestro titulo y lo guardamos en una constante
const tituloPrincipal = document.querySelector(".main-title");

// Generamos la fecha que queremos insertar
const hoy = new Date();

// Alteramos el texto de nuestro titulo con un "template string"
tituloPrincipal.textContent = `Hola mundo: ${hoy.getDate()}/${
  hoy.getMonth() + 1
}/${hoy.getFullYear()}`;

// ----------------------------------------------------