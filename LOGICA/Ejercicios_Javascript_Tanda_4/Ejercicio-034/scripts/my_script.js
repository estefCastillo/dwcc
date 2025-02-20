/***************************************************************************************************************
 *
 *   Objetivo: Aprender a mejorar en lógica de programación
 *             Aprender a usar el objeto Date y sus métodos
 *             Perseverar en la comprobación de datos introducidos por un usuario
 *
 *   Tarea: Dado mes y año, determinar si el mes tiene un Viernes 13
 *
 *   Entrada : año  (1920) y mes (01)
 *
 *   Salida  : El mes Enero de 1920 no tiene un Viernes 13
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../comprobacion.js";

function viernes13(año,mes) {
    let dia=new Date(año,mes-1,13);

    let nMes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    if (dia.getDay()==5) {
        console.log(`El mes ${nMes[mes-1]} de ${año} si tiene un Viernes 13`);
    } else {
        console.log(`El mes ${nMes[mes-1]} de ${año} no tiene un Viernes 13`)
    }
     
}

let año=solicitarDato("Introduzca un año (1920)","integer");
let mes=solicitarDato("Introduzca un mes (01)","integer");

console.log(viernes13(año,mes));


/**
 * Datetimeformat nos da el mes en español!!!
 */