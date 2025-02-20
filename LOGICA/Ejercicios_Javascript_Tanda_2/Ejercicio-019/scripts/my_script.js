/***************************************************************************************************************
 *
 *   Objetivo: Reforzar programación funcional
 *             Reforzar en la lógica de programación
 *             Mejorar la forma de programar
 *             Aprender a abordar el problema de diferentes formas
 *
 *   Tarea: Solicitar un número entero n
 *          Generar los números perfectos menores que n
 *
 *          Nota: Un número es perfecto cuando el número es igual a la suma de sus divisores.
 *
 *   Entrada : número entero: n
 *
 *   Salida  :
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

let n=solicitarDato("Introduce un número entero","integer");

function nPerfecto(n){
    let cantidad=0
    for (let i = 0; i < n; i++) {
        if(n%i==0){
            cantidad=cantidad+i
        }
        
    }

    if (n==cantidad) {
        return `El número ${n} es perfecto`
    } else {
         return `El número ${n} no es perfecto`
    }
}

console.log(nPerfecto(n))
/* PROFE
function perfecto(n){
    n=Array.from(length=n-1,(el,i)=>i+1)
    const divisores=numeros.filter(el=>n%el==0)
    let resultado=divisores.reduce((anterior,actual)=>anterior+actual,0)
    return resultado
}

console.log(perfecto(n))*/