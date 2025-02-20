/***************************************************************************************************************
 *
 *   Objetivo: Aprender a modificar el documento HTML. Inicialización al DOM.
 *             Reforzar en el uso de template strings
 *             Reforzar el uso de estructuras de control repetitivas y condicionales
 *             Reforzar en la validación de datos de entrada
 *             Reforzar en la estructuración de código
 *
 *   Tarea: Solicitaremos un número entero entre 1 y 9
*           Mostrar la tabla de multiplicar de ese número
 *
 *   Entrada : numero     1 <= numero <= 9
 *
 *   Salida  : 1 x numero = n
 *             2 x numero = ....
 *             3 x numero = ....
 *                   ....
 *             9 x numero = ....
 *
 *   Nota: Formatea la salida en el documento HTML empleando una tabla con 5 columnas y nueve filas
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../comprobacion.js";

let n=null

do{
    n=solicitarDato("Introduce un número entero del 1 al 9","integer")
    if(n<0||n>9)
        alert("ERROR! El número tiene que estar comprendido entre 1-9")
} while(n<0||n>9)



 let tabla="<table>";
 for (let i = 1; i <= 9; i++) {
    tabla+=`<tr>
                <td>${n}</td>
                <td>*</td>
                <td>${i}</td>
                <td>=</td>
                <td>${n*i}</td>
            </tr>`
 }
tabla+="</table>"

const $body=document.querySelector("body")
$body.innerHTML=tabla

/*Con Arrays */
const numeros=Array.from((length=9),(el,index)=>index+1)
let interiorTabla=numeros.map(el=>
            `<tr>
                <td>${n}</td>
                <td>*</td>
                <td>${i}</td>
                <td>=</td>
                <td>${n*i}</td>
            </tr>`)
