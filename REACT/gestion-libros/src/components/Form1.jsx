import React from "react";
import { Formik } from "formik";

const Basic = () => (
   <div>
      <h1>Gestión de libros</h1>
      <Formik
         initialValues={{ titulo: "", autor: "", isbn: "" }}
         validate={(values) => {
            const errors = {};
            if (!values.titulo) {
               errors.titulo = "Required";
            }
            if (!values.autor) {
               errors.autor = "Required";
            }
            if (!values.isbn) {
               errors.isbn = "Required";
            }
            return errors;
         }}
         onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
               alert(JSON.stringify(values, null, 2));
               setSubmitting(false);
            }, 400);
         }}
      >
         {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
         }) => (
            <form onSubmit={handleSubmit}>
               <label htmlFor="titulo">Titulo</label>
               <input
                  type="text"
                  name="titulo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.titulo}
                  class="u-full-width"
               />
               {errors.titulo && touched.titulo && errors.titulo}

               <label htmlFor="autor">Autor</label>
               <input
                  type="text"
                  name="autor"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.autor}
                  class="u-full-width"
               />
               {errors.autor && touched.autor && errors.autor}

               <label htmlFor="isbn">ISBN#</label>
               <input
                  type="text"
                  name="isbn"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.isbn}
                  class="u-full-width"
               />
               {errors.isbn && touched.isbn && errors.isbn}

               <button type="submit" disabled={isSubmitting}>
                  Submit
               </button>
            </form>
         )}
      </Formik>
   </div>
);

export default Basic;
