/***************************************************************************************************************
 *
 *   Objetivo: Mejorar en lógica de programación
 *             Mejorar la eficiencia en el uso de recursos limitados
 *
 *   Tarea: Solicitamos, de forma repetida, números enteros hasta que ingresamos el número 0, 
 *          que no se tendrá en cuenta.
 *          Se mostrará cuál fue el mayor de los números enteros introducidos
 *
 *   Entrada : numero1, numero2, numero3,.....
 *
 *   Salida  : El mayor de numero1, numero2, numero3,.... es ....
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

let num=null
let mayor=null
let arr=null

do {
    num=solicitarDato("Introduzca un número entero","integer")
    arr=arr+num+",";

    if (num>mayor) {
        mayor=num;
    }
  
} while (num!=0);

console.log(`El mayor de ${arr.slice(0,arr.length -3)} es ${mayor}`)
