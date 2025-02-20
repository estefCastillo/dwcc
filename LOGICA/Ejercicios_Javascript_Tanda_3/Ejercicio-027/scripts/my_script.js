/***************************************************************************************************************
 *
 *   Objetivo: Mejorar en la lógica de programación
 *
 *   Tarea: Obtener la secuencia más larga de ceros indicando la posición de inicio. En caso de que existan varias,
 *          se indicará la primera.
 *
 *   Entrada : "011000010110000"
 *
 *   Salida  : Secuencia: "0000"   Posicion: 3
 *
 ***************************************************************************************************************/

function contarCerosConsecutivos(secuencia, posicion) {
    let inicio = posicion;
    while (inicio + 1 < secuencia.length && secuencia[inicio] === '0' && secuencia[inicio] === secuencia[inicio + 1]) {
        inicio++;
    }
    return inicio - posicion + 1; 
}

function masLargaCeros(secuencia) {
    let longitud = 0;
    let longitudMax = 0;
    let posicionMax = 0;
    
    for (let i = 0; i < secuencia.length; i += longitud) {
        if (secuencia[i] === '0') {
            longitud = contarCerosConsecutivos(secuencia, i);
            
            if (longitud > longitudMax) {
                longitudMax = longitud;
                posicionMax = i;
            }
        } else {
            longitud = 1; 
        }
    }

    let secuenciaF='0'.repeat(longitudMax);
    
    return  `Secuencia: ${secuenciaF}, Posición Inicial: ${posicionMax}` ;
}

let secuencia = prompt("Introduce una secuencia de números:");
console.log(masLargaCeros(secuencia));
