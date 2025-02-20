/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *             Aprender a trabajar con problemas incompletos en definición
 *
 *   Tarea: Solicitar al usuario su peso (en kg) y su estatura (en metros)
 *          Calculamos el índice de masa corporal
 *          Mostrar por pantalla la frase "Tu índice de masa corporal es <imc>", donde <imc> corresponde 
 *          al indice de masa corporal redondeado con dos decimales 
 *          Indicar si hay riesgo de enfermedad coronaria.
 *
 *          El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
 *          estatura en metros.
 *
 *          El riesgo de que una persona sugra enfermedades coronarias depende de su edad y su índice de masa
 *          corporal:
 *                               Edad<45     Edad>=45
 *                   IMC<=22.0    bajo         medio
 *                   IMC>=22.0    medio        alto
 *
 *   Entrada : número flotante: peso
 *             número flotante: estatura
 *
 *   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

function calcularImc(peso,estatura,edad) {
    let imc=(peso/(Math.pow(estatura,2))).toFixed(1);   
    let riesgo="";

    if (edad<45) {
        if (imc<=22.0) {
            riesgo="bajo";
        } else {
            riesgo="medio";
        }
    }else if(edad>=45){
        if (imc<=22.0) {
            riesgo="medio";
        } else {
            riesgo="alto";
        }
        
    }

    return `Tu índice de masa corporal es ${imc}. Tienes un riesgo ${riesgo} de enfermedad coronaria`;
}

let peso=solicitarDato("Introduzca su peso","float");
let estatura=solicitarDato("Introduzca su estatura","float");
let edad=solicitarDato("Introduzca su edad","integer");

console.log(calcularImc(peso,estatura,edad))