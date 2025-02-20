/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *             Aprender a mejorar la forma de resolver un problema una vez ya fue resuelto
 *
 *   Tarea: Solicitar el número de segundos que estamos confinados por una pandemia
 *
 *   Entrada : número entero positivo: segundos
 *
 *   Salida  : Mensaje tal como: "Hemos estado confinados A semanas, B días, C horas, D minutos, E segundos"
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../comprobacion.js";

function tiempo(seg) {
    let semanas,dias,horas,minutos,segundos,resto;
    semanas=Math.floor(seg/(7*3600*24));
    resto=seg%(7*3600*24);

    dias=Math.floor(resto/(3600*24));
    resto=resto%(3600*24);
    
    horas=Math.floor(resto/3600);
    resto=resto%3600;

    minutos=Math.floor(resto/60);
    segundos=resto%60;
  
    return `Hemos estado confinados ${semanas} semanas, ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`
}

let seg=solicitarDato("Introduzca unos segundos","integer");
console.log(tiempo(seg));
