/***************************************************************************************************************
 *
 *   Objetivo: Reforzar lógica de programación
 *             Reforzar en el uso de métodos del obejto window y console
 *             Reforzar el aprendizaje en el uso de operaciones matemáticas
 *
 *   Tarea: Solicitar el número de caramelos y el número de niños
 *          Calcular cuantos caramelos tocan por niño y cuantos sobran
 *
 *   Entrada : número entero positivo: nCaramelos 
 *             número entero positivo: nPeques
 *
 *   Salida  : Mostrar el resultado por consola con un mensaje como
 * 
 *                   El número de caramelos por niño es: XXXX
 *                   El número de caramelos que sobran es: YYYY
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

let nCaramelos=solicitarDato("Introduzca el número de caramelos: ","integer");
let nPeques=solicitarDato("Introduzca el número de niños: ","integer");

let reparto=parseInt(nCaramelos/nPeques);
let sobrantes=nCaramelos%nPeques;

console.log(`El número de caramelos por niño es ${reparto}`);
console.log(`El número de caramelos que sobran es ${sobrantes}`);

