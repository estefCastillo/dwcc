/***************************************************************************************************************
 *
 *   Objetivo: Reformar en lógica de programación
 *             Aprender nuevos métodos de String/Array
 *             Aprender a programar pensando en datos de entrada
 *             Reforzar en la programación funcional
 *             Reforzar en el uso de métodos de array
 *
 *   Tarea: Solicita un texto y una palabra.
 *
 *   Entrada : cadena de texto: texto
 *             cadena de texto: palabra
 *
 *   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
 *
 ***************************************************************************************************************/

import solicitarDato from "../../../comprobacion.js";

function buscarPalabra(texto,palabra) {
   const palabras=texto.split(" ").filter(el=>el!="").join("");
   let posiciones=[];
   
    for (let i = 0; i < palabras.length; i++) {
      let r=palabras.indexOf(palabra,i);
      if (r!=-1) {
          posiciones.push(r);
      }
  }

  posiciones=Array.from(new Set(posiciones));
  
  return `Posiciones de ${palabra} son ${posiciones.join(",")}`;

 }
 
 let texto=solicitarDato("Introduzca un texto","string");
 let palabra=solicitarDato("Introduzca una palabra","string");
 console.log(buscarPalabra(texto,palabra))