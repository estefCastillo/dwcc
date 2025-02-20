/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de estructuras de programación repetitivas
 *             
 *   Tarea: Se solicita un número entero n entre 1 y 20 al usuario. 
 *          Se mostrará una pirámide de la siguiente forma:
 *
 *               1
 *               2 2
 *               3 3 3
 *               4 4 4 4
 *                 ...
 *               n n n n n n n (n veces)
 *
 *          Realizar en ejercicio con for, while, do while
 * 
 *   Entrada : numero entero: n
 *
 *   Salida  : La pirámide mostrada en la tarea del ejercicio
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../comprobacion.js"

/**
 * Volver hacer con while y do-while
 */

let numero=solicitarDato("Introduce un número entero entre 1-20","integer")

/**
 * Solución con for
 * function imprimir(num) {
        for (let i = 1; i <= num; i++) {
            console.log((i+" ").repeat(i))
        }
    }

 */
/**
 * Solución con while
 * function imprimir(num){
    let i=1;
    while(i<=num){
        console.log((i+" ").repeat(i))
        i++;
    }
}
 * 
 */

/**
 * Solución con do-while
 */
function imprimir(num){
    let i=1;
    do{
        console.log((i+" ").repeat(i))
        i++;
    }while(i<=num)
}


    if (numero>=1&&numero<=20) {
        console.log(imprimir(numero))   
    }else{
        alert("Número no válido")
    }


