/***************************************************************************************************************
 *
 *   Objetivo: Practicar la programación funcional en la resolución de problemas
 *             Practicar en el uso de arrow functions
 *             Reforzar el aprendizaje sobre arrays
 *             Aprender nuevos métodos del objeto Math
 *
 *   Tarea: Calcular la suma de los pares y de los impares de n elementos de un array generados
 *          aleatoriamente entre 1 y 10.
 *
 *   Entrada : n
 *
 *   Salida  : Los elementos pares del array son: x1, x2, x3, ...
 *             Los elementos impares del array son: x1, x2, x3, ...
 *             La suma de los elementos pares del array es: XXXX
 *             La suma de los elementos impares del array es: YYYY
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

function sumaAleatoria(n) {
    let arr=Array.from({length:n}, el=>Math.floor(Math.random()*10)+1);
    let pares=arr.filter(el=>el%2==0);
    let sumaPares=pares.reduce((el1,el2)=>el1+el2,0);
    let impares=arr.filter(el=>el%2!=0);
    let sumaImpares=impares.reduce((el1,el2)=>el1-el2,0);

    return `Los elementos pares del array son: ${pares}\n
            Los elementos impares del array son: ${impares}\n
            La suma de los elementos pares del array es :${sumaPares}\n
            La resta de los elementos pares del array es: ${sumaImpares}\n`

}

let n = solicitarDato("Introduce un número", "integer");
console.log(sumaAleatoria(n));



