/***************************************************************************************************************
 *
 *   Objetivo: Aprender a mejorar en la resolución de ejercicios de lógica de programación
 *             Aprender a plantarse diferentes formas de resolver un problema
 *
 *   Tarea: Solicitar la fecha de nacimiento de una persona (dia, mes y año)
 *          Calcular el número de la suerte
 *
 *          El número de la suerte se calcula sumando las cifras obtenidas en la suma
 *
 *          Por ejemplo: si la fecha de nacimiento es el 12 de Julio de 1980
 *                                  12-7-1980 = 1999
 *                                  1+9+9+9 = 28
 *                                  2+8 = 10
 *                                  1+0 = 1   <---- Número de la suerte
 *
 *   Entrada : dia, mes, anho
 *
 *   Salida  : Como has nacido el dia de mes de año, tu número de la suerte es XXX
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

function numeroSuerte(fN) {
    let resultado=0;
    for (let i = 0; i< fN.length; i++) {
      resultado+=parseInt(fN[i]);
    }
    
    do {
        let r=resultado.toString();
        let numero=0;
        for (let j = 0; j < r.length; j++) {
            numero+=parseInt(r[j])
        }

        resultado=numero;
    } while (resultado>9);

    return resultado;
}

function verificarFecha() {
   let hacer = true;
   while (hacer) {
      let fecha = solicitarDato("Introduzca su fecha de nacimiento 00-00-0000","string");
 
      const fN = fecha.split("-");
      if (fN[0].length != 2 || fN[1].length != 2 || fN[2].length != 4) {
         alert("Formato no válido");
      } else {
         hacer = false;
        return numeroSuerte(fN);
      }
   }
}


console.log(verificarFecha());
