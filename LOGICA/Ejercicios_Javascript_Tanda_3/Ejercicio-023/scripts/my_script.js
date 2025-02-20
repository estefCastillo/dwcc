/***************************************************************************************************************
 *
 *   Objetivo: Reforzar el aprendizaje de lógica de programación
 *             Reforzar el uso de funciones y template strings
 *             Reforzar el uso básica del objeto document
 *             Reforzar el aprendizaje de la definicion de arrays (adicional)
 *             Reforzar el aprendizaje de programación funcional (adicional)
 *             Mejorar en separar lógica de programación de vista (adicional)
 *
 *   Tarea: Cardio !
 *          Cuando realizas ejercicio físico puedes querer estimar las pulsaciones del corazón para
 *          no "quemarte". La formula Karvonen es un método que podemos emplear para determinar la
 *          frecuencia cardíaca:
 *
 *                      FC=(((220-edad)-DFC)*I)+DFC
 *
 *          donde:
 *               FC : Frecuencia cardiaca
 *               DFC: Frecuencia cardíaca en descanso
 *               I  : Intensidad
 *
 *   Entrada : edad : entero
 *             frecuencia cardíaca en descanso: entero (ej: 65 pulsaciones por minuto)
 *
 *             edad:22  DFC: 65
 *
 *             Intensidad     Frecuencia
 *             --------------------------
 *                 55 %          138
 *                 ...           ...
 *                 95%           191
 *
 *   Salida  : tabla html que muestre la Frecuencia cardíaca para Intensdidades del 55% al 95%
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

function cal_Intensidad(edad,dfc) {
    let fc=0;
    let intensidades=[];
    
    for (let i = 55; i <=95; i++){
        fc=Math.round((((220-edad)-dfc)*(i/100)+dfc))
        intensidades.push({intensidad:`${i}%`,frecuencia:fc})
    }
    
    let tabla=`<table border='2'>
    <tr>
        <td>Intensidad</td>
        <td>Frecuencia</td>
    </tr>`;
    for (let i = 0; i < intensidades.length; i++) {
        tabla+=
        `<tr>
            <td>${intensidades[i].intensidad}</td>
            <td>${intensidades[i].frecuencia}</td>
         </tr>`
    }
    tabla+="</table>";
    return tabla
}
 
function cal_Intensidad2(edad,dfc) {
    let intensidades=Array.from({length:41},(el,i)=>i+55).
                    map(el=>`<tr>
                               <td>${el}</td>
                               <td>${Math.round((((220-edad)-dfc)*(el/100)+dfc))}</td>
                            </tr>`).join('')
                        
    let tabla=`<table border='2'>
                  <tr>
                    <td>Intensidad</td>
                    <td>Frecuencia</td>
                  </tr>
                  ${intensidades}
               </table>`;
    return tabla
}

const $body=document.querySelector("body")
let edad = solicitarDato("Introduzca su edad","integer");
let dfc=solicitarDato("Introduzca su frecuencia cardíaca en descanso","integer");
let tabla=cal_Intensidad2(edad,dfc)
$body.innerHTML=tabla





