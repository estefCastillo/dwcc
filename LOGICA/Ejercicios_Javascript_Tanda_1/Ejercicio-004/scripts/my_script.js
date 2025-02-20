/***************************************************************************************************************
 *
 *   Objetivo: Aprender a validar datos de entrada 
 *             Aprender a realizar operaciones aritméticas
 *             Aprender a emplear métodos del objeto Math
 *             Reforzar el aprendizaje en el uso de template strings (adicional)
 *             Reforzar en el aprendizaje de programación y casos de tests (adicional)
 *
 *   Tarea: Solicitar al usuario que visita la página dos números enteros 
 *          Mostrar en la consola del navegador el resultado de sumarlos, restarlos, multiplicarlos y dividirlos
 *
 *   Entrada : número entero (Number): numero1
 *             número entero (Number): numero2
 *
 *   Salida  : La suma de numero1 y numero2 es: numero1+numero2
 *             La resta de numero1 y numero2 es: numero1-numero2
 *             El producto de numero1 y numero2 es: numero1*numero2
 *             La division de numero1 entre numero2 es: numero1/numero2
 *
 *   Notas   : Ten en cuenta que la división entre los números puede dar un número con muchos decimales
 *             ¿Cómo podemos limitar el número de decimales que se mostrarán?
 *             ¿Qué pasa en Javascript cuando el divisor es cero?
 *
 ***************************************************************************************************************/
//marina&julian.2021

    import { solicitarDato } from "../../../comprobacion.js";

   //const sumar=(n1,n2)=>n1+n2

    function sumar(n1,n2){
        return parseInt(n1)+parseInt(n2);
    }
    
    function restar(n1,n2){
        return n1-n2;
    }
    
    function multiplicar(n1,n2){
        return n1*n2;
    }
    
    function division(n1,n2){
        return (n1/n2).toFixed(2);
    }
    
    let firstNumber=solicitarDato("Introduzca un número entero","integer");
    let secondNumber=solicitarDato("Introduzca un segundo número entero","integer");
    
    console.log(`La suma de ${firstNumber} y ${n2} es: ${sumar(firstNumber,secondNumber)}`);
    console.log(`La resta de ${firstNumber} y ${secondNumber} es: ${restar(firstNumber,secondNumber)}`);
    console.log(`El producto ${firstNumber} y ${secondNumber} es: ${multiplicar(firstNumber,secondNumber)}`);
    console.log(`La división ${firstNumber} y ${secondNumber} es: ${division(firstNumber,secondNumber)}`);
    
    
