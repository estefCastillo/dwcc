/***************************************************************************************************************
 *
 *   Objetivo: Reflexionar sobre el tipo de estructura de programación a emplear que permita resolver la tarea
 *             de la forma más eficiente
 * 
 *   Tarea: Solicitar al usuario el porcentaje de acierto en un examen tipo test 
 *          Mostrar la cualificación según la nota según la siguiente tabla
 *
 *                Cualificación    Porcentaje
 *                     A             90-100
 *                     B             80-90
 *                     C             70-79
 *                     D             60-69
 *                     F             0-59
 *
 *   Entrada : número entero entre 0 y 100 (ambos incluidos): nota
 *
 *   Salida  : El examen se cualifica con un XXX
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../comprobacion.js";

let nota=solicitarDato("Introduzca el porcentaje de acierto:","integer");
let mensaje=null;

    function darNota(nota){
        if(nota>=0&&nota<=100){
            if (nota>=0&&nota<=59) {
                mensaje="El examen se cualifica con un: F"
            
            }else if(nota>=60&&nota<=69){
                mensaje="El examen se cualifica con un: D"
            }else if(nota>=70&&nota<=79){
                mensaje="El examen se cualifica con un: C"
            }else if(nota>=80&&nota<=89){
                mensaje="El examen se cualifica con un: B"
            }else{
            mensaje="El examen se cualifica con un: A"
            }
        }else{
        mensaje="NO EXISTE ESE PORCENTAJE!!!!!!!!!!!!"
        }

        return mensaje;
    }
alert(darNota(nota));

/*function darNota(nota) {
  
    switch (true) {
        case (nota>=0&&nota<=59):
            mensaje="El examen se cualifica con un: F"
            break;

        case (nota>=60&&nota<=69):
            mensaje="El examen se cualifica con un: D"
            break;

        case (nota>=70&&nota<=79):
            mensaje="El examen se cualifica con un: C"
            break;

        case(nota>=80&&nota<=89):
            mensaje="El examen se cualifica con un: B"
            break;

        case(nota>=90&&nota<=100):
            mensaje="El examen se cualifica con un: A"
            break;    
        default:
            mensaje=`NO EXISTE ESE PORCENTAJE!!!!!!!!!!!!!"`
            break;
    }  

    return mensaje;
}*/

