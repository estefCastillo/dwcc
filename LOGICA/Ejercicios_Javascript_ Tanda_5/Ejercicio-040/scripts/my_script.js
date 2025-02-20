/***************************************************************************************************************
 *
 *   Objetivo: Mejorar en lógica de programación
 *
 *   Tarea: Comprobar si dos cadenas son un anagrama 
 *          Una palabra es anagrama de otra si las dos tienen las mismas letras, con el mismo 
 *          número de apariciones, pero en un orden diferente
 *
 *   Entrada : cadena1:cadena de caracteres
 *             cadena2:cadena de caracteres
 * 
 *   Salida  : Mensaje indicando si ambas cadenas son anagramas o no
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

function anagramas(c1,c2) {
    return c1.split("").sort().join("")==c2.split("").sort().join("")? "Son anagramas" :"No son anagramas";

}

let cadena1=solicitarDato("Introduzca una cadena: ","string");
let cadena2=solicitarDato("Introduzca una cadena: ","string");
console.log(anagramas(cadena1,cadena2));