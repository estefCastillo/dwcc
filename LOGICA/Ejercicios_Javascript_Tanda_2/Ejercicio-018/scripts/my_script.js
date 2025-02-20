import solicitarDato from "../../../comprobacion.js";

/***************************************************************************************************************
 *
 *   Objetivo: Refozar el aprendizaje en definir y usar funciones declaradas y expresadas
 *             Entender la diferencia entre funciones declaradas y funciones expresadas
 *             Reforzar en el uso de arrow functions
 *             Reforzar el aprendizaje en la definicion de arrays con el método estático Array.from
 *             Aprender a emplear métodos del objeto Array para la programación funcional
 *             Mejorar la forma de programar
 *
 *   Tarea: Solicitar un número entero positivo, n
 *          Generar los primeros n números primos
 *
 *          Nota: Un número p es primo si sólo es divisible por 1 y por p
 *
 *   Entrada : numero entero: n
 *
 *   Salida  : 1, 3, 5, 7, ...
 *
 ***************************************************************************************************************/
let n=solicitarDato("Introduzca un número entero","integer")


function esPrimo(n){
    let cont=0;
    let primo=true
        i=1
        while(primo&&i<n){
            if(n%i==0){
                primo=false
            }
            i++
        }
        return primo
}


function allPrimos(n){
    let arr=[];
    for (let j = 1; j <=n; j++) {
        if(esPrimo(j)){
           arr.push(j)
        }
    }
    return arr
}

console.log(allPrimos(n).join(", "))


/*PROFE
n=20
numeros=Array.from((length=20),(el,i)=>i+1)
console.log(numeros)
numeros.filter(el=>n%el==0)*/
