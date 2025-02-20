/***************************************************************************************************************
 *
 *   Objetivo: Aprender a usar diferentes estructuras de programación condicionales
 *             Reforzar en el uso de métodos del objeto window
 *             Mejorar en lógica de programación
 *
 *   Tarea: Solicitar al usuario que visita la página web su edad 
 *          Mostrar un mensaje en función de ella
 * 
 *          Realizar la tarea de dos formas: empleando if y empleando switch
 *
 *   Entrada : número entero (Number): edad
 *
 *   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
 *             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
 *             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
 *
 *   Notas   : Debemos comprobar que la edad sea un número entero mayor que 0 (indicaremos el error)
 *             La edad no puede ser superior a 120
 *
 ***************************************************************************************************************/
   import solicitarDato from "../../../comprobacion.js";
    let age=solicitarDato("Introduce tu edad","integer")

 /*EJERCICIO HECHO CON IF

    function ageComprobator(age){
        let resultado=null;

        if (age==parseInt(age)) {
            if(age>0&&age<=120){
                if(age<30){
                    resultado=`! Ponte a trabajar !`;
                }else if(age>=30&&age<=64){
                    resultado=`! Que ganas tengo de jubilarme !`;
                }else if(age>=65){
                    resultado=`! Descansa un poco !`;
                }
            }else{
                resultado=`EDAD NO VÁLIDA`;
            }
        }else{
            resultado=`NÚMERO NO VÁLIDO`;
        }

       return resultado;
        
    }
*/

//Ejercicio hecho con Switch
    function ageComprobator(age){
        let resultado=null
        switch (true) {
            case (age>=0&&age<30):
                resultado=`! Ponte a trabajar !`
                break;
            case (age>=30&&age<=64):
                resultado=`! Que ganas tengo de jubilarme !`;
                break;
            case (age>=65&&age<=120):
                resultado=`! Descansa un poco !`;
                break;
            default:
                resultado=`Edad no válida (0-120)`;
                break;
        }
        return resultado
    }

    let mensaje=ageComprobator(age)
    
    console.log(mensaje);
   


   
  