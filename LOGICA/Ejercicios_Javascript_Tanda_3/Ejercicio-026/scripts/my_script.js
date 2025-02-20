/***************************************************************************************************************
 *
 *   Objetivo: Aprender a buscar soluciones "no clásicas"
 *             Conocer métodos del objeto String
 *             Resolver problemas empleando programación funcional
 *
 *   Tarea: Mostrar un array de cadenas en forma rectangular
 *
 *   Entrada : una frase de texto
 *             P. ej.: Hola Mundo en un cuadrado
 *
 *   Salida  : la frase en un cuadrado
 * 
 *              ************
 *              * Hola     *
 *              * Mundo    *
 *              * en       *
 *              * un       *
 *              * cuadrado *
 *              ************
  *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

function mostrarPalabras(texto) {
   const palabras=texto.split(" ").filter(el=>el!="")

   let longitudMax=Math.max(...palabras.map(palabra=>palabra.length))

   let interior=palabras.map(palabra=>`* ${palabra}${' '.repeat(longitudMax-palabra.length+1)} *`).join('\n')

   return `${"*".repeat(longitudMax+5)}\n${interior}\n${"*".repeat(longitudMax+5)}`
}

let frase=solicitarDato("Introduzca una frase de texto","string");
console.log(mostrarPalabras(frase));

