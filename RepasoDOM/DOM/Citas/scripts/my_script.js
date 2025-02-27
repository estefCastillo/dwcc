const citas=[
      {
        "mascota": "Kuki",
        "propietario": "Tino Fernandez",
        "fecha": "2025-03-15",
        "hora": "16:10",
        "sintomas": "Se va por la pata abajo",
        "id": 1
      },
      {
        "mascota": "Tigre",
        "propietario": "Ana Lorenzo",
        "fecha": "2025-03-18",
        "hora": "15:20",
        "sintomas": "Pesa poco. Caniche",
        "id": 2
      },
      {
        "mascota": "Neptuno",
        "propietario": "Lisa Simpson",
        "fecha": "2025-03-18",
        "hora": "16:20",
        "sintomas": "Pierde pelo en abundancia",
        "id": 3
      },
      {
        "mascota": "Guffi",
        "propietario": "Roberto Disney",
        "fecha": "2025-03-19",
        "hora": "16:44",
        "sintomas": "Habla como una cotorra",
        "id": 4
      },
      {
        "mascota": "Mouse",
        "propietario": "Susana Lorenzo",
        "fecha": "2025-03-19",
        "hora": "16:47",
        "sintomas": "Estiró la pata",
        "id": 5
      },
      {
        "mascota": "Piolin",
        "propietario": "Mercedes Lorenzo",
        "fecha": "2025-03-22",
        "hora": "16:47",
        "sintomas": "Canta poco",
        "id": 6
      }
]
        
const $d=document,
$fechaCitas=$d.querySelector('#fechaCitas'),
$bodyCitas=$d.querySelector('#body-citas')


function renderCitas(citas) {
  const fechaActual=new Date();
  
  const proximasCitas=citas
  .filter(el=>new Date(`${el.fecha}T${el.hora}`)>=fechaActual)
  .sort((a,b)=>new Date(`${a.fecha}T${a.hora}`)-new Date(`${b.fecha}T${b.hora}`))
  .slice(0,2)

  proximasCitas.forEach(cita => {
    const citaHTML = `
      <div class="cita">
        <p><strong>Mascota:</strong> ${cita.mascota}</p>
        <p><strong>Dueño:</strong> ${cita.propietario}</p>
        <p><strong>Fecha:</strong> ${cita.fecha}</p>
        <p><strong>Hora:</strong> ${cita.hora}</p>
        <p><strong>Síntomas:</strong> ${cita.sintomas}</p>
        <button class="eliminar" data-id="${cita.id}">Eliminar &times;</button>
      </div>
    `;
    $bodyCitas.innerHTML += citaHTML;
  });

}

$d.addEventListener('DOMContentLoaded',ev=>{
  renderCitas(citas)
})
