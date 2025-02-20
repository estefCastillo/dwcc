/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de diferentes formas de resolución de problemas y sus ventajas/desventajas
 *             Reforzar en la lógica de programación
 *             Reforzar en el aprendizaje de programación funcional y métodos del objeto Array
 *             Reforzar en el aprendizaje de métodos del objeto String
 *             Mejorar en el planteamiento sobre casos de entrada
 *
 *   Tarea: Determinar en un texto el número de palabras, la primera palabra y la última
 *
 *   Entrada : una cadena de caracteres
 *
 *   Salida  : Se muestra la cadena de caracteres introducida por el usuario y
 *
 *             Número de palabras: XXX
 *             Primera palabra: YYYYY
 *             Última palabra: ZZZZZ
 *             Palabras ordenadas de la a a la z: AAA BBBB CCCC DDDD
 *             Palabras ordenadas de la z a la a: ZZZ YYYY WWWW
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

function palabras(cadena) {
   const palabras=cadena.split(" ").filter(el=>el!="")
   
   let nPalabra=palabras.length;
   console.log(`Número de palabras: ${nPalabra}`)
   let palabraPrimera=palabras[0];
   console.log(`Primera palabra: ${palabraPrimera}`)
   let palabraUltima=palabras[nPalabra-1]
   console.log(`Última palabra: ${palabraUltima}`)
   let ordenA=palabras.sort();
   console.log(`Orden alfabético: ${ordenA}`)
   let ordenZ=palabras.sort().reverse();
   console.log(`Orden reverso: ${ordenZ}`)
   
}

let cadena = solicitarDato("Introduzca una cadena de caracteres", "string");
console.log(palabras(cadena));
