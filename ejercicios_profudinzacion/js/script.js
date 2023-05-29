"use strict";

// Descripcion de los tipos
const descripcion_agua = "Los Pokémon tipo agua se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición."
const descripcion_planta = "Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate"
const descripcion_electrico = "Los Pokémon de tipo eléctrico tienen hábitats letiados, desde bosques y praderas, hasta ciudades y centrales eléctricas. Los Pokémon de tipo dragón, eléctrico y planta son resistentes al tipo eléctrico, y aún más los de tipo tierra, quienes son inmunes a los ataques eléctricos. Por consiguiente, los Pokémon eléctricos deben de ser muy precavidos con los ataques de tipo tierra, el cual representa su única debilidad."
const descripcion_normal = "Los Pokémon de tipo normal abarcan la mayor cantidad y letiedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon. Los tipos normal son los más diversos entre los Pokémon, con características letiadas, desarrollos y requisitos para las evoluciones diferentes de cada uno, al igual que diferir en las zonas donde se pueden capturar, desde bosques, cuevas, montañas, ciudades, etc."
const descripcion_fuego = "Los Pokémon de tipo fuego basan sus ataques, principalmente, en el control de este elemento; y la mayoría pueden quemar al Pokémon oponente, mientras que ellos no sufren quemaduras. Son apasionados y, algunos, de mal carácter (como el Charizard de Ash); viven en cuevas o zonas rocosas y muy áridas; y, más probable, aun cerca de volcanes activos. Sin embargo, los únicos Pokémon que aparentemente suelen andar por lugares verdes como las praderas, son Ponyta y Rapidash, pudiendo ser que estos lugares les permiten galopar sin obstáculos. También, algunos son más dóciles, como Growlithe, Vulpix y sus respectivas evoluciones."
    /* Comienza a escribir su código aquí */

//Uso contantes para guardar los datos que luego voy a utilizar

const tipo_agua = "Tipo Agua";
const tipo_fuego = "Tipo Fuego";
const tipo_electricidad = "Tipo Electricidad";
const tipo_normal = "Tipo Planta";
const tipo_planta = "Tipo Planta";

const scr_agua = "./images/water_type.png";
const scr_normal = "./images/normal_type.png";
const scr_fuego = "./images/fire_type.png";
const scr_electricidad = "./images/electric_type.png";
const scr_planta = "./images/grass_type.png";

//Otra alternativa es usar diccionarios para jugar con clave valor

let types = {
    tipoAgua: tipo_agua,
    tipoFuego: tipo_fuego,
    tipoElectricidad: tipo_electricidad,
    tipoNormal: tipo_normal,
    tipoPlanta: tipo_planta
};

let descriptcions = {
    tipoAgua: descripcion_agua,
    tipoFuego: descripcion_fuego,
    tipoElectricidad: descripcion_electrico,
    tipoNormal: descripcion_normal,
    tipoPlanta: descripcion_planta
};

let srcs = {
    tipoAgua: scr_agua,
    tipoFuego: scr_fuego,
    tipoElectricidad: scr_electricidad,
    tipoNormal: scr_normal,
    tipoPlanta: scr_planta
};

let classes = {
    tipoAgua: "agua",
    tipoFuego: "fuego",
    tipoElectricidad: "electricidad",
    tipoNormal: "normal",
    tipoPlanta: "planta"
};

//Me traigo todos los elementos del HTML que quiero editar

let myHeader = document.querySelector('.header');
let myDescripcion = document.getElementById('descripcion');
let myImagen = document.querySelector('.icon-type');
let myArticle = document.querySelector('article');

const btns = document.querySelectorAll("button")
btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        let btnClicked = event.target;
        changeCards(btnClicked.className);
    });
});

function changeCards(className) {
    if (className == classes.tipoAgua) {
        myArticle.classList.remove(myArticle.getAttribute("class"))
        myArticle.classList.add(className)
        myHeader.textContent = types.tipoAgua;
        myDescripcion.textContent = descriptcions.tipoAgua;
        myImagen.src = srcs.tipoAgua;
    } else if (className == classes.tipoElectricidad) {
        myArticle.classList.remove(myArticle.getAttribute("class"))
        myArticle.classList.add(className)
        myHeader.textContent = types.tipoElectricidad;
        myDescripcion.textContent = descriptcions.tipoElectricidad;
        myImagen.src = srcs.tipoElectricidad;
    } else if (className == classes.tipoFuego) {
        myArticle.classList.remove(myArticle.getAttribute("class"))
        myArticle.classList.add(className)
        myHeader.textContent = types.tipoFuego;
        myDescripcion.textContent = descriptcions.tipoFuego;
        myImagen.src = srcs.tipoFuego;
    } else if (className == classes.tipoNormal) {
        myArticle.classList.remove(myArticle.getAttribute("class"))
        myArticle.classList.add(className)
        myHeader.textContent = types.tipoNormal;
        myDescripcion.textContent = descriptcions.tipoNormal;
        myImagen.src = srcs.tipoNormal;
    } else {
        myArticle.classList.remove(myArticle.getAttribute("class"))
        myArticle.classList.add(className)
        myHeader.textContent = types.tipoPlanta;
        myDescripcion.textContent = descriptcions.tipoPlanta;
        myImagen.src = srcs.tipoPlanta;
    }
}