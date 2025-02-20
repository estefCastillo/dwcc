import React from "react";
import { useState } from "react";

function Form1() {
   const [nombre, setNombre] = useState("");
   const [sexo, setSexo] = useState("hombre");
   const [lenguaje, setLenguaje] = useState("js");
   const [terminos, setTerminos] = useState(true);

   const handleSubmit = (ev) => {
      ev.preventDefault();
      alert("El formulario se ha enviado");
   };

   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="nombre">Nombre</label>
         <br />
         <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(ev) => setNombre(ev.target.value)}
         />
         <p>Sexo:</p>
         <input
            type="radio"
            name="sexo"
            id="hombre"
            value="hombre"
            defaultChecked
            onChange={(ev) => setSexo(ev.target.value)}
         />
         <label htmlFor="hombre">Hombre</label>
         <input
            type="radio"
            name="sexo"
            id="mujer"
            value="mujer"
            onChange={(ev) => setSexo(ev.target.value)}
         />
         <label htmlFor="mujer">Mujer</label>

         <p>Lenguaje de programación favorito</p>
         <select
            name="lenguaje"
            value={lenguaje}
            on
            onChange={(e) => setLenguaje(e.target.value)}
         >
            <option value="---">---</option>
            <option value="js">Javascript</option>
            <option value="php">PHP</option>
            <option value="py">Python</option>
         </select>

         <hr />
         <label htmlFor="terminos">Acepto los términos y condiciones</label>
         <input
            type="checkbox"
            name="terminos"
            id="terminos"
            onChange={(e) => setTerminos(e.target.checked)}
            checked={terminos}
         />
         <hr />
         <input type="submit" value="Enviar" />
      </form>
   );
}

export default Form1;
