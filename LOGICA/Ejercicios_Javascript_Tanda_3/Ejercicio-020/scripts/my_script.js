import solicitarDato from "../../../comprobacion.js";

/***************************************************************************************************************
 *
 *   Objetivo: Conocer nuevos métodos del objeto Math
 *             Aprender la diferencia entre funciones definidas y expresadas
 *             Mejorar en el uso de lógica de programación para la resolución de problemas
 *             Mejorar en la comunicación con el usuario
 *
 *   Tarea: Adivina un número. 
 *          Solicitaro números enteros entre 1 y 100 mientras el usuario no acierte un número, que se escogerá
 *          inicialmente de forma aleatoria.
 *          Al finalizar el juego se mostrará el número de intentos, pero sin tener en cuenta aquellos intentos 
 *          en los que se introduce un dato incorrecto (que no esté sea un número entero entre 1 y 100).
 *
 *   Entrada : un número entero, n (en cada intento)
 *
 *   Salida  : ! Has acertado ! Has necesitado XX intentos
 *             ! Has fallado ! El número que tienes que adivinar es (mayor|menor)
 *
 ***************************************************************************************************************/

let n;
let intentos=0;
let numero=Math.floor(Math.random()*100)+1;

do {
     n=solicitarDato("Introduce un número entero","integer");
     if (n>0&&n<=100) {
        if (n!=numero) {
            intentos++;
            if (n>numero) {
                console.log("! Has fallado ! El número que tienes que adivinar es menor")
            } else {
                console.log("! Has fallado ! El número que tienes que adivinar es mayor")
            }
        }else{
            console.log(` ! Has acertado ! Has necesitado ${intentos} intentos`)
        }
     } else {
        alert(`${n} no se encuentra en el rango pedido`)
     }
} while (n!=numero);


/**
 * const aleatorio (min,max){
 * min+(max-min)*Math.random()
 * }
 */