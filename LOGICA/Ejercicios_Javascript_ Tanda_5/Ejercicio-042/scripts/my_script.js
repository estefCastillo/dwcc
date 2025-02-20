/***************************************************************************************************************
 *
 *   Objetivo: Aprender métodos del objeto array
 *
 *   Tarea: Tenemos n números enteros consecutivos (salvo uno) desordenados en un array. 
 *          Buscar el número entero "perdido".
 *
 *   Entrada : ---
 *
 *   Salida  : El entero que falta en el array
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

function nperdido(cadena) {
   let c=cadena.split("").sort();
   let perdido=null;
   for (let i = 0; i < c.length; i++) {
        if ((c[i+1])!==((c[i]+1))) {
            perdido=(c[i]);
            return `El entero perdido es: ${perdido}`;
        }
   }
  
}

let cadena=solicitarDato("Introduzca una secuencia de número consecutiva","string");
console.log(nperdido(cadena));



