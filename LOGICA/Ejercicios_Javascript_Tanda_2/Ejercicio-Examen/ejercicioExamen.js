/**
 * Tenemos una secuencia de aminoácidos
 * Determinar la secuencia con más longitud,donde empieza y donde acaba
    Ejemplo: AAGGGTTGGAAA
 * 
 */

import solicitarDato from "../../comprobacion.js";

let cadenaADN = solicitarDato("Introduce una secuencia de aminoácidos", "string");

function contarAminosIguales(cadena, posicion) {
    let inicio = posicion;
    while (inicio + 1 < cadena.length && cadena[inicio] === cadena[inicio + 1]) {
        inicio++;
    }
    return inicio - posicion + 1;
}

let longitud = 0;
let longitudMax = 0;
let posicionMax = 0;
let aminoMax = "";


for (let i = 0; i < cadenaADN.length; i += longitud) {
    longitud = contarAminosIguales(cadenaADN, i); 

    if (longitud > longitudMax) {
        longitudMax = longitud;
        posicionMax = i; 
        aminoMax = cadenaADN[i];
    }
}

console.log(`Aminoácido: "${aminoMax}" Longitud: ${longitudMax} Posición inicial: ${posicionMax} Posición final: ${posicionMax + longitudMax - 1}`);
