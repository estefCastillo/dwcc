/***************************************************************************************************************
 *
 *   Objetivo: Reforzar el aprendizaje en el uso operadores aritméticos
 *             Reforzar en el uso de métodos del objeto Math
 *             Reforzar en el uso de template strings
 *             Aprender a definir y usar arrays (adicional)
 *             Aprender a usar métodos de programación funcional (adicional)
 *             Mejorar en la realización de programas (adicional)
  * 
 *   Tarea: Viajar es un placer, pero si visitamos un pais que no pertenezca a la Union Europea
 *          tenemos que cambiar la moneda.
 * 
 *          Crea un script se encargue de realizar la conversión de euros a dolares americanos.
 *          La conversión se calcula a través del tipo de cambio, es decir, cuantos dolares representa
 *          1 euro:
 *
 *                  Cantidad de dolares = Cantidad de euros * Tipo de cambio
 *
 *   Entrada : cantidad en euros: número flotante (2 decimales)
 *             tipo de cambio: número flotante
 *
 *   Salida  : Un mensaje del tipo
 * 
 *               E euros con el tipo de cambio C son D dolares
 *
 *   Adicional: Si tenemos los tipos de cambios recogidos para varios paises en un array, mostrar
 *              los cambios a dolares para los diferentes paises
 * 
 *  https://openexchangerates.org/
 * 
 ***************************************************************************************************************/
import solicitarDato from "../../../comprobacion.js";

const cambios=[
    {moneda:"DOL",cambio:1.1},
    {moneda:"MXN",cambio:19.60},
    {moneda:"JPY",cambio:145.14},
    {moneda:"GBP",cambio:0.75},
    {moneda:"CHF",cambio:0.85}
    ]

function cambioDolares(cantidad,moneda) {
    let tipoCambio=cambios.find(el=>el.moneda==moneda)
    return {
        moneda:tipoCambio.moneda,
        cambio:(cantidad*tipoCambio.cambio).toFixed(2)
    }
}


function cambiosTotales(cantidad) {
    /*cambios.forEach(elemento => {
         resultado=(cantidad*parseFloat(elemento.cambio)).toFixed(2);
         console.log(`${cantidad} dolares son ${resultado} ${elemento.moneda}`)
    });*/
/*     return cambios.map(el=>{
        return {
            moneda:el.moneda,
            cambio:(cantidad*parseFloat(el.cambio)).toFixed(2)
        }
    })
 */
    return cambios.map(el=>cambioDolares(cantidad,el.moneda))
}

let cantidad=solicitarDato("Introduzca la cantidad en euros","float").toFixed(2);
//let moneda=solicitarDato("A que moneda","string");

console.log(cambiosTotales(cantidad))
console.log(cambioDolares(cantidad,"MXN"))
