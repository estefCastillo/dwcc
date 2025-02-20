/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de métodos del objeto Math
 *             Reforzar el uso de estructuras repetitivas
 *             Reforzar en el uso de template strings
 *             Aprender a definir arrays con el método estático Array.from
 *             Reforzar el aprendizaje en el uso de funciones flecha (arrow funcions)
 *             Aprender a emplear el método map del objeto Array para la programación funcional
 *
 *   Tarea: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
 *
 *   Entrada : inicio, fin
 *
 *   Salida  : inicio², (inicio+1)², ..... (fin)²
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";


let n1=solicitarDato("Introduzca un número entero inicial","integer");
let n2=solicitarDato("Introduzca un número entero final","integer");

let arr=null;

for (let i = n1; i <=n2; i++) {
    arr=arr+Math.pow(i,2)+",";
}

console.log(arr.slice(0,arr.length -1))
