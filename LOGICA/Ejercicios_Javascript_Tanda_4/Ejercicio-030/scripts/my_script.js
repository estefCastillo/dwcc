/***************************************************************************************************************
 * 
 *   Objetivo: Mejorar en programación modular
 *             Mejorar en lógica de programación                      
 * 
 *   Tarea: El número de Euler, e ≈ 2,71828, puede ser representado como la siguiente suma infinita:
 *
 *                     e =1/0!+1/1!+1/2!+1/3!+1/4!+…
 *
 *          n! es el factorial de un numero entero n y es el producto de 1 hasta n (0!=1)
 *
 *                           4! = 4 * 3 * 2 * 1
 *
 *          Calcular el valor aproximado de "e" hasta que la diferencia entre dos sumandos
 *          consecutivos sea menor que 0,0001
 *
 *   Entrada : ---
 *
 *   Salida  : 2,71...
 *
 ***************************************************************************************************************/
/**Otra forma */
const factorialR=(n)=>n==0?1:n*factorialR(n-1)

function factorial(n) {
    let resultado=1;
    
    if (n==0) {
       resultado=1;
    }else{
        for (let i = 1; i <=n; i++) {
            resultado=resultado*i;
        }
    }
   return resultado;
}

function euler(error) {
    let e=2;

    let n=2
    let sum1=1/factorial(n)
    let sum2=1/factorial(n+1)
    while(sum1-sum2>error){
        e+=sum1+sum2
        n+=2
        sum1=1/factorial(n)
        sum2=1/factorial(n+1)
    }
    return e;
}

console.log(euler(0.0001));