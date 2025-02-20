/***************************************************************************************************************
 *
 *   Objetivo: Aprender a abordar el problema de diferentes formas determinando las ventajas/inconvenientes
 *             Mejorar en la lógica de programación
 *             
 *   Tarea: Solicitamos un número entero n positivo. 
 *          Si n es par, se divide por 2 y su n es impar se multiplica por tres y suma uno. 
 *          El proceso se repite hasta que n tenga el valor de 1.
 * 
 *             Por ejemplo, la secuencia para n=3 será:
 *
 *                  3--> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1
 *
 *   Entrada : numero entero n entre 1 y 100
 *
 *   Salida  : La secuencia de valores obtenida
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

function secuenciaReversa(n) {
    const arr=[];

    arr.push(n);
    do {
        n=(n%2==0)?n/2:(n*3)+1
        arr.push(n) 
    } while (n!=1);
    
    return arr
}
//Hacerlo recursivo ahora
function secuenciaReversaRecursiva(n,arr=[]){
    
    arr.push(n);
    let n1=0;
    if (n === 1) {
        return arr;
    }else{
        n1=(n % 2 === 0) ? n / 2 : (n * 3) + 1;
    }

    return secuenciaReversaRecursiva(n1,arr)
}

let n=solicitarDato("Introduce un número","integer");
console.log(secuenciaReversa(n).join("-->"));
console.log(secuenciaReversaRecursiva(n).join("-->"));