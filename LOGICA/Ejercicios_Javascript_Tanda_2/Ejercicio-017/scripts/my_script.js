

/***************************************************************************************************************
 *
 *   Objetivo: Practicar en el uso de métodos de los objetos String, Array, Math, ...
 *             Reforzar el aprendizaje en la creación de funciones declaradas
 *             Reforzar el aprendizaje en la creación de funciones expresadas
 *             Reforzar el aprendizaje en la creación de arrow functions
 *             Mejorar en la forma de programar
 *
 *   Tarea: n es automorfico si su cuadrado termina en n
 *
 *   Entrada : número entero: n
 *
 *   Salida  : El número n es|no es automórfico
 *
***************************************************************************************************************/
import solicitarDato from "../../../comprobacion.js";
let n=solicitarDato("Introduce un número entero","integer");

let cuadrado=Math.pow(n,2).toString();
    n=n.toString();
    let lastN=cuadrado.slice(cuadrado.length-n.length,cuadrado.length);

    function esAutomorfico(n){
    if(lastN==n){
        return `El número "${n}" es automórfico`
    }else{
        return `El número "${n}" no es automórfico`
    }
}

console.log(esAutomorfico(n))

