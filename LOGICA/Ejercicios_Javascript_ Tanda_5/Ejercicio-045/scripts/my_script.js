import solicitarDato from "../../../comprobacion.js";

/***************************************************************************************************************
 *
 *   Objetivo: Aprender a definir con objetos literales
 *             Aprender a acceder a métodos del objeto
 *
 *   Tarea: Crear un objeto persona con nombre, edad y un metodo que determine si es mayor o no de edad
 *
 *   Entrada : cadena de texto: nombre
 *             número entero positivo: edad
 *
 *   Salida  : XXXXXX es|no es mayor de edad
 *
 ***************************************************************************************************************/
let n=solicitarDato("Introduzca su nombre","string");
let e=solicitarDato("Introduzca su edad","integer");

const persona={
    nombre:n,
    edad:e,

    mayorEdad:function(){
        return this.edad>=18;
    }
};

console.log("¿Mayor de edad?",persona.mayorEdad());

