/***************************************************************************************************************
 *
 *   Objetivo: Mejorar la lógica de programación
 *
 *   Tarea: Solicitamos tres números enteros al usuario 
 *          Mostramos cual es el mayor
  *
 *   Entrada : número entero: numero1
 *             número entero: numero2
 *             número entero: numero3
 *
 *   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../comprobacion.js";

let n1=solicitarDato("Introduzca un número entero","integer")
let n2=solicitarDato("Introduzca un 2º número entero","integer")
let n3=solicitarDato("Introduzca un 3er número entero","integer")

/*function mostarMayor(num1,num2,num3){
    let mayor=0;
        if(num1>num2&&num1>num3){
            mayor=num1
        }else if(num2>num1&&num2>num3){
            mayor=num2
        }else{
            mayor=num3
        }
        return mayor
    }
*/
function mostarMayor(num1,num2,num3){
    let mayor=0;
    switch (true) {
        case (num1>num2&&num1>num3):
            mayor=num1
            break;

        case (num2>num1&&num2>num3):
            mayor=num2
            break;
    
        default:
            mayor=num3
            break;
    }
    return mayor
}

console.log(`El mayor de ${n1}, ${n2} y ${n3} es : ${mostarMayor(n1,n2,n3)}`)