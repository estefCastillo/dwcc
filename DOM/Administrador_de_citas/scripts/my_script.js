const citas = [
   {
      mascota: "Kuki",
      propietario: "Tino Fernandez",
      fecha: "2025-01-10",
      hora: "16:10",
      sintomas: "Se va por la pata abajo",
      id: 1,
   },
   {
      mascota: "Tigre",
      propietario: "Ana Lorenzo",
      fecha: "2025-01-10",
      hora: "15:20",
      sintomas: "Pesa poco. Caniche",
      id: 2,
   },
   {
      mascota: "Neptuno",
      propietario: "Lisa Simpson",
      fecha: "2025-03-18",
      hora: "16:20",
      sintomas: "Pierde pelo en abundancia",
      id: 3,
   },
   {
      mascota: "Guffi",
      propietario: "Roberto Disney",
      fecha: "2025-03-19",
      hora: "16:44",
      sintomas: "Habla como una cotorra",
      id: 4,
   },
   {
      mascota: "Mouse",
      propietario: "Susana Lorenzo",
      fecha: "2025-03-19",
      hora: "16:47",
      sintomas: "Estiró la pata",
      id: 5,
   },
   {
      mascota: "Piolin",
      propietario: "Mercedes Lorenzo",
      fecha: "2025-03-22",
      hora: "16:47",
      sintomas: "Canta poco",
      id: 6,
   },
];

const $d = document,
   $bodyCitas = $d.querySelector("#body-citas"),
   [$form1, $form2] = $d.querySelectorAll("form"),
   $tcita = $d.querySelector("#tcita").content;

const NCITAS = 2;

function filtrarCitas(citas, fecha) {
   let citasFiltradas = citas.filter((el) => el.fecha == fecha);
   if (citasFiltradas.length) {
      return citasFiltradas;
   } else {
      citasFiltradas = citas.filter((el) => el.fecha > fecha);
      if (citasFiltradas.length > 0 && citasFiltradas.length >= NCITAS) {
         return citasFiltradas.slice(0, NCITAS);
      } else {
         return citasFiltradas;
      }
   }
}

function renderCitas(citas,fecha) {
   if (citas.length) {
      if (citas[0].fecha == $form2.fechaCitas) {
         $bodyCitas.innerHTML = "Las citas de hoy.";
      } else {
         $bodyCitas.innerHTML = "<h4>No hay citas. Las dos siguientes:</h4>";
      }
   } else {
      $bodyCitas.innerHTML = "<h4>No hay citas.</h4>";
   }

   citas.forEach((cita) => {
      const $cita = $tcita.cloneNode(true);
      const $spans = $cita.querySelectorAll("span");
      $spans[0].textContent = cita.mascota;
      $spans[1].textContent = cita.propietario;
      $spans[2].textContent = cita.fecha;
      $spans[3].textContent = cita.hora;
      $spans[4].textContent = cita.sintomas;
      const buttons = $d.querySelectorAll("button");
      buttons.forEach((button) => (button.dataset.citaId = cita.id));
      $bodyCitas.appendChild($cita);
   });
}

$form1.addEventListener("submit", (ev) => {
   ev.preventDefault();

   let citaId = $form1.enviar.dataset.citaId;
   let citaIndex;
   if (citaId) {
      //Modificar Cita
      citaIndex = citas
         .findIndex((cita) => cita.id == citaId)
         [("mascota", "propietario", "fecha", "hora", "sintomas")].forEach(
            (el) => (citas[citaIndex][el] = $form1[el].value)
         );
   } else {
      //Añadir Cita
      let cita = {};
      if (citas.length) {
         citaIndex = Math.max(...citas.map((cita) => cita.id));
      } else {
         citas[1]["id"] = 1;
      }
      ["mascota", "propietario", "fecha", "hora", "sintomas"].forEach(
         (el) => (citas[citaIndex][el] = $form1[el].value)
      );
   }
   citas[citaIndex]["mascota"] = $form1["mascota"].value;
   citas[citaIndex]["propietario"] = $form1["propietario"].value;
   citas[citaIndex]["fecha"] = $form1["fecha"].value;
   citas[citaIndex]["hora"] = $form1["hora"].value;
   citas[citaIndex]["sintomas"] = $form1["sintomas"].value;

   $form1.enviar.textContent = "Añadir Cita";

   if ($form1.enviar.dataset.citaId) {
      delete $form1.enviar.dataset.citaId;
      $bodyCitas.addEventListener("click", handleClickBodyCitas);
      $form1.reset();
      renderCitas(citas);
   }
});
$form2.fechaCitas.addEventListener('input',ev=>{
  let citasFiltradas=filtrarCitas(citas,$form2.fechaCitas.value)
  renderCitas(citas,$form2.fechaCitas.value)
})

function handleClickBodyCitas(ev) {
   ev.preventDefault();

   if ((ev.target.tagName = "BUTTON")) {
      let citaId = ev.target.dataset.citaId;
      let indice = citas.findIndex((cita) => cita.id == citaId);

      if (ev.target.id == "eliminar") {
         //Eliminar
         citas.splice(indice, 1);
      } else {
         //Modificar
         ["mascota", "propietario", "fecha", "hora", "sintomas"].forEach(
            (el) => ($form1[el].value = citas[indice][el])
         );
         // $form1.mascota.value=citas[indice].mascota
         // $form1.propietario.value=citas[indice].propietario
         // $form1.fecha.value=citas[indice].fecha
         // $form1.hora.value=citas[indice].hora
         // $form1.sintomas.value=citas[indice].sintomas

         
         $form1.enviar.textContent = "Modificar Cita";
         $form1.enviar.dataset.citaId = citaId;
         $bodyCitas.removeEventListener("click", handleClickBodyCitas);
         console.log($bodyCitas.querySelectorAll("button"));

         $bodyCitas
            .querySelectorAll("button")
            .forEach((button) => button.classList.add("off"));
      }
      renderCitas(citas);
   }
}
$bodyCitas.addEventListener("click", handleClickBodyCitas);

$d.addEventListener("DOMContentLoaded", (ev) => {
   let hoy = new Date();
   let year = hoy.getFullYear();
   let month = (hoy.getMonth() + 1).toString().padStart(2, "0");
   let day = hoy.getDate().toString().padStart(2, "0");
   let fecha = `${year}-${month}-${day}`;
   let citasFiltradas = filtrarCitas(citas, fecha);
   $form2.fechaCitas.value = fecha;
   // renderCitas(citas)
});
