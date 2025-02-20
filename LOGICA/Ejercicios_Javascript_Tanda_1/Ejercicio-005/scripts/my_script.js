/***************************************************************************************************************
 *
 *   Objetivo: Aprender a emplear operadores aritméticos
 *             Reforzar en el uso de métodos del objeto Math
 *             Aprender a emplear métodos adicionales del objeto Math
 *             Aprender a definir y usar funciones declaradas (adicional)
 *             Aprender a definir y usar funciones expresadas (adicional)
 *             Mejorar en el aprendizaje de programación (adicional)
 *  
 *   Tarea: Cada vez más están ofreciendo cuentas corrientes remuneradas en los bancos. 
 *          Estas cuentas se rigen por la regla de interés compuesto:
 * 
 *               T=C*(1+r/n)^(nt)
 * 
 *         donde:
 * 
 *               T: La cantidad total al final de la inversión
 *               C: El capital inicial
 *               r: es el interés anual
 *               t: número de años que se invierte la cantidad
 *               n: número de veces que se cobran los intereses en el año (normalmente 12 en las cuentas corrientes remuneradas)        
 * 
 *          Solicitar los datos para poder calcular la cantidad total de la inversión 
 *          Mostrar un mensaje con el resultado
 *
 *   Entrada : T, C, r ,t, n
 *
 *   Salida  : Un mensaje indicando cual será la cantidad total al final de la inversión
 *
 *         1500 euros invertidos al 4.3% por 6 años cobrando intereses 4 veces al año hacen 1938.84 euros           
 * 
 *   Adicional: Crear una versión que funcione a la inversa: determiunar la cantidad inicial que 
 *              deberíamos invertir para alcanzar un determinado objetivo final
 * 
 ***************************************************************************************************************/
import solicitarDato from "../../../comprobacion.js";

let C=solicitarDato("El capital inicial","float")
let r=solicitarDato("Interés anual","float")
let t=solicitarDato("Número de años que se invierte la cantidad","integer")
let n=solicitarDato("Número de veces que se cobran los intereses en el año","integer")


function cantidadTotal(C,r,t,n){ 
    r=r/100;
    return (C*Math.pow(1+r/n,n*t)).toFixed(2);
}

console.log(`${C} euros invertidos al ${r} por ${t} años cobrando intereses ${n} veces al año hacen ${cantidadTotal(C,r,t,n)} euros`)

//Método a la inversa

let T=solicitarDato("La cantidad total al final de la inversión","float")

function cantidadInversa(T,r,t,n) {
    r=r/100
    return (T/Math.pow(1+r/n,n*t)).toFixed(2);
}

console.log(`${T} euros son el resultado de invertir al ${r} por ${t} años cobrando intereses ${n} veces al año, cuyo capital inicial es: ${cantidadInversa(T,r,t,n)}`)