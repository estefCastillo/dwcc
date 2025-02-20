/***************************************************************************************************************
 *
 *   Tarea: Practicar el uso de programación funcional mediante el uso del método reduce
 *
 *   Objetivo: Solicitar un número entero n
 *             Imprimir en la consola la suma de los números enteros entre 1 y n, donde n es un dato solicitado al usuario. 
 *             Imprimir en la consola la suma de cada término de la serie ((-1)^p+1)/(2*p-1), donde p va desde 1 a n
 *             Comprobar si esa suma coincide con n*(n+1)/2
 *
 *   Entrada : número entero: n
 *
 *   Salida  : La suma de 1+2+3+...n es XXXX
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

function numerosSuma(n) {
    let num=[];
    let suma=0;

    for (let i = 1; i <=n; i++) {
        num.push(i);
    }
    let sum=parseInt(num.reduce((n1,n2)=>n1+n2,suma));

    let verificar=sum==(n*(n+1)/2)?"coincide con n*(n+1)/2":"no coincide con n*(n+1)/2";
    
    return `La suma de ${num} es ${sum} y ${verificar}`;
    
}

let n=solicitarDato("Introduzca un número entero","integer");
console.log(numerosSuma(n))
