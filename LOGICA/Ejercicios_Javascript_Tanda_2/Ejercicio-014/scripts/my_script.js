/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de estructuras de control repetitivas.
 *             Reforzar en el uso de funciones definidas por el usuario.
 *             Aprender diferentes formas de crear arrays (adicional)
 *             Entender las funciones anónimas y funciones flecha o arrow functions (adicional)
 *             Aprender a emplear métodos del objeto Array para programación funcional (adicional)
 *
 *   Tarea: Solicitamos un número entero n al usuario 
 *          Mostramos en la consola los numeros pares desde 2 hasta ese numero
 * 
 *          Realizar 4 versiones: con for, while, do..while, con arrays y el método join
 *
 *   Entrada : numero entero n, n>=2
 *
 *   Salida  : 2, 4, 6, ..., n  (incluidas las coma y el espacio detras de cada número excepto el último)
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";
/**
 * Hacer de las otras formas
 */
 let num=solicitarDato("Introduzca un número entero mayor que dos","integer");

 /**
  * Función con for
  *     function pares(num){
        let arr=[];
        for (let i = 0; i <= num; i++) {
            arr.push(i)
        }
        return arr.filter(el=>el%2==0&&el!=0)
    
    }
  */

 /**
  * Función con for y join
  *     function pares(num){
        let arr=[];
        for (let i = 2; i <= num; i++) {
           if(i%2==0){
            arr.push(i)
           }
            
        }
        return arr.join(", ");
    
    }
  */

    /**
     * Función con while
     *     function pares(num){
        let arr=[];
        let i=2;
        while(i<=num){
            if(i%2==0){
                arr.push(i)
            }
            i++;
        }
        return arr.join(", ");
    }

     */
    /*Función do-while */
    function pares(num){
        let arr=[];
        let i=2;
        do {
            if(i%2==0){
                arr.push(i)
            }
            i++;
        } while (i<=num);
        
        return arr.join(", ");
    }

    if(num>=2){
        console.log(`Números pares a partir del ${num} : ${pares(num)}`)
    }else{
        alert("Número no válido")
    }
    