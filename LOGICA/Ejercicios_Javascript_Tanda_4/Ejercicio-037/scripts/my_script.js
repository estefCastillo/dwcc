/***************************************************************************************************************
 *
 *   Objetivo: Practicar en el uso del objeto Date
 *
 *   Tarea: Solicitar dos fechas en formato dd/mm/aaaa 
 *          Indicar los días transcurridos entre las dos fechas
 *
 *   Entrada : 31/01/2013 02/02/2013
 *
 *   Salida  : 2 días
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../comprobacion.js";

function distanciaFecha() {
   let f1 = solicitarDato("Introduzca una fecha en formato 00/00/0000", "string");
   let f2 = solicitarDato("Introduzca una fecha en formato 00/00/0000", "string");

   let [dia, mes, año] = f1.split("/");
   let [dia2, mes2, año2] = f2.split("/");

   let fecha1=new Date(año,mes- 1,dia);
   let fecha2=new Date(año2,mes2- 1,dia2);

   let dias=parseInt(fecha2-fecha1)/(1000*60*60*24);
   
   return dias;
  
}
console.log(distanciaFecha());