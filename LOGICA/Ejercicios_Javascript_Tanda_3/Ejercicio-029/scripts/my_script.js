/***************************************************************************************************************
 *
 *   Objetivo: Aprender a plantearse diferentes formas de resolver un problema
 *             Practicar la programación iterativa y recursiva
 *             Valorar diferentes métodos de resolución de problemas, sus ventajas e inconvenientes
 * 
 *   Tarea: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
 *          P.ej: Dabale arroz a la zorra el abad
 *
 *   Entrada : Cadena de texto
 *
 *   Salida  : La cadena .... (es|no es) un palíndromo
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

let texto=solicitarDato("Introduce una cadena de texto","string");

function palindromo(texto) {
    const cadena=texto.toLowerCase().split(" ").filter(el=>el!="").join("");
    let cadenaReves=cadena.split('').reverse().join('')
   
    if(cadena==cadenaReves){
        return `${texto} es Palindromo`;
    }else{
        return `${texto} no es Palindromo`;
    }
}

console.log(palindromo(texto));

