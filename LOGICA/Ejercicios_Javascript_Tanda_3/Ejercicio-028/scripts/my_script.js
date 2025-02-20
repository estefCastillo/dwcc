/***************************************************************************************************************
 *
 *   Objetivo: Aprender a plantearse diferentes formas de resolver un problema
 *             Practicar la programación iterativa y recursiva
 *             Valorar diferentes métodos de resolución de problemas, sus ventajas e inconvenientes
 *             Aprender a emplear funciones definadas por el usuario
 *
 *   Tarea: Mostrar la serie de Fibonacci hasta el número indicado por el usuario
 *          Cada elemento de la serie de Fibonacci se calcula sumando los dos anteriores. 
 *          Los dos primeros elementos de la serie son 0 y 1
 * 
 *          Realizar dos versiones: la versión iterativa y la recursiva
 *
 *   Entrada : n
 *
 *   Salida  : 0,1,2,3,5,8,13,....
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

let n=solicitarDato("Introduzca un número","integer");

function fibonacci(n) {
    let arr=[];

    for (let i = 0; i <=n; i++) {
        if(i==0||i==1||i==2){
            arr.push(i);
        }else{
            arr.push(arr[i - 1] + arr[i - 2]);
        }
    }
    return arr;
}

console.log(fibonacci(n).join(', '));
//HACER RECURSIVA