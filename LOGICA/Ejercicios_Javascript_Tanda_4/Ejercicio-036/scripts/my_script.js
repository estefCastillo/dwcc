/***************************************************************************************************************
 *
 *   Objetivo: Aprender a mejorar en lógica de programación
 *             Aprender a usar el objeto Date y sus métodos
 *             Perseverar en la comprobación de datos introducidos por un usuario
 *
 *   Tarea: Solicitar una fecha a un usuario (en formato día/mes/año)
 *          Comprobar si es correcta o existe.
 *
 *          Tener en cuenta que el año puede ser bisiesto
 *          Si es bisiesto (divisible por 4 o por 400, pero no es divisible por 100), Febrero tendrá 29 días.
 *
 *   Entrada : dia/mes/anho
 *
 *   Salida  : La fecha dia/mes/anho (es|no es) correcta
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../comprobacion.js";

function verificarFecha() {
   let fecha = solicitarDato("Introduzca una fecha en formato 00/00/0000", "string");
   let [dia, mes, año] = fecha.split("/");

   if (dia.length !== 2 || mes.length !== 2 || año.length !== 4) {
      return "Formato no válido";
   }else{
      let fechaDada = new Date();
      let esFechaValida = fechaDada.getMonth() === mes - 1;
   
      if (esFechaValida) {
         return `La fecha ${dia}/${mes}/${año} es correcta`;
      } else {
         return `La fecha ${dia}/${mes}/${año} no es correcta`;
      }
   }
}

console.log(verificarFecha());
