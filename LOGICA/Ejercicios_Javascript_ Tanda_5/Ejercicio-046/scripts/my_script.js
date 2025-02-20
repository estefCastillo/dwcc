/***************************************************************************************************************
 *
 *   Objetivo: Aprender a definir arrays de objetos
 *             Reforzar en el uso de programación funcional
 *             Mejorar en el testeo de aplicaciones
 *
 *   Tarea: Almacenar los siguientes datos en una estructura que nos facilite operar con ellos:
 * 
 *          Nombre      Apellidos           Puesto                      Fecha Contratación
 *          --------------------------------------------------------------------------------
 *           Juan       Alonso Pérez        Gestor                          2016-12-31
 *           Xian       Xuong               Ingeniero de Software           2016-10-05
 *           Ana        Rodriguez Sánchez   Programadora 
 *           Jose       Vega Leirós         Desarrollador web
 *           Marta      Martínez López      Administrador de BD             2015-12-18
 * 
 *          Crea un script con funciones que nos permitan:
 * 
 *            - Filtrar los datos por nombre, apellidos o puesto según la cadena de texto que pasemos
 *            - Ordene los datos según el campo que pasemos (nombre, apellidos, etc) y el criterio de 
 *              ordenación (asc,des)
 *            - Filtre los datos según el número de años que llevan contratados
 *
 *   Salida  : Llama a las funciones creadas con diferentes criterios
 *
 ***************************************************************************************************************/

const trabajadores=[
    {
        nombre:"Juan",
        apellidos:"Alonso Pérez",
        puesto:"Gestor",
        fecha:"2021-11-12"
    },
    {
        nombre:"Xian",
        apellidos:"Xuong",
        puesto:"Ingeniero de Software",
        fecha:"2023-11-11"
    },
    {
        nombre:"Ana",
        apellidos:"Rodriguez Sánchez",
        puesto:"Programadora",
        fecha:null
    },
    {
        nombre:"Jose",
        apellidos:"Vaga Leirós",
        puesto:"Desarrollador web",
        fecha:null
    },
    {
        nombre:"Marta",
        apellidos:"Martínez López",
        puesto:"Administrador de BD",
        fecha:"2020-11-09"
    },
]

function order(campo,forma) {
    return trabajadores.sort((a, b) => {
        if (forma === "asc") {
            return a[campo].localeCompare(b[campo]);
        } else if (forma === "desc") {
            return b[campo].localeCompare(a[campo]);
        } 
    });
}

function orderYear(years){
    let cYear=new Date()
    let trabajadoresFiltrados=trabajadores.filter((el) => el.fecha !== null&&)
    console.log(year)
}

console.log(orderYear(2));

function filtrarTrabajadores(trabaj,campo,txtbuscar){
    
}