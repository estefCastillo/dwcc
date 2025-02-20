import React from "react";
import { useState } from "react";

const initialForm = {
   nombre: "",
   sexo: "mujer",
   lenguaje: "js",
   terminos: false,
};

function Form2() {
   const [form, setForm] = useState(initialForm);

   const handleChange = (ev) => {
      setForm({
         ...form,
         [ev.target.name]: ev.target.value,
      });
   };

   const handleChecked = (ev) => {
      setForm({
         ...form,
         [ev.target.name]: ev.target.checked,
      });
   };

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
            value={form.nombre}
            onChange={handleChange}
         />
         <p>Sexo:</p>
         <input
            type="radio"
            name="sexo"
            id="hombre"
            value="hombre"
            defaultChecked
            onChange={handleChange}
         />
         <label htmlFor="hombre">Hombre</label>
         <input
            type="radio"
            name="sexo"
            id="mujer"
            value="mujer"
            onChange={handleChange}
         />
         <label htmlFor="mujer">Mujer</label>

         <p>Lenguaje de programación favorito</p>
         <select
            name="lenguaje"
            value={form.lenguaje}
            id={form.lenguaje}
            onChange={handleChange}
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
            onChange={handleChecked}
            checked={form.terminos}
         />
         <hr />
         <input type="submit" value="Enviar" />
      </form>
   );
}

export default Form2;
