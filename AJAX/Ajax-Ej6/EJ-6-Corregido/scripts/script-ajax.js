const $d = document,
   $balance = $d.querySelector("#balance"),
   $moneyplus = $d.querySelector("#money-plus"),
   $moneyMinus = $d.querySelector("#money-minus"),
   $historial = $d.querySelector("#list"),
   $form = $d.querySelector("form"),
   $cantidad = $form.querySelector("#amount"),
   $concepto = $form.querySelector("#text");

const historial = [];

function ajax(options) {
   const { url, mehtod, fExito, fError, datos } = options;
   fetch(url, {
      method: mehtod || "GET",
      headers: {
         "Content-type": "application/json charset=utf-8",
      },
      body: JSON.stringify(datos),
   })
      .then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
      .then((json) => fExito(json))
      .catch((error) => fError(error));
}
function checkForm() {
   if ($concepto.value != "" && $cantidad.value != "") {
      return true;
   } else {
      return false;
   }
}
function changeHistory(historialId) {
   let movimiento = historial.find((el) => el.id == historialId);
   ajax({
      url: `http://localhost:3000/movimientos/${historialId}`,
      mehtod: "PUT",
      fExito: (json) => {
         console.log(json);
         movimiento.cantidad = $cantidad.value;
         movimiento.concepto = $concepto.value;
         $form.reset();
         $form["btn-add"].textContent = "Añadir transaccion";
         delete $form["btn-add"].dataset.id;
         $historial
            .querySelectorAll("i")
            .forEach((i) => i.classList.remove("off"));
         $historial.addEventListener("click", handleClick);
         renderHistorial(historial);
      },
      fError: (error) => console.log(error),
      datos: {
         concepto: $concepto.value,
         cantidad: $cantidad.value,
         estado: movimiento.estado,
      },
   });
}
function addHistorial(){
    ajax({
        url: `http://localhost:3000/movimientos`,
        mehtod: "POST",
        fExito: (json) => {
           historial.push(json)
           $form.reset()
           renderHistorial(historial)
        },
        fError: (error) => console.log(error),
        datos: {
           concepto: $concepto.value,
           cantidad: $cantidad.value,
           estado: true,
        },
     });
}
$form.addEventListener("submit", (ev) => {
   ev.preventDefault();

   if ($form["btn-add"].dataset.id) {
      //PUT: Actualizar
      if (checkForm()) {
         changeHistory($form["btn-add"].dataset.id);
      }
   } else {
      //POST:Añadir
      if (checkForm()) {
         addHistorial();
      }
   }
});

function deletehistorial(historialId) {
   ajax({
      url: `http://localhost:3000/movimientos/${historialId}`,
      mehtod: "DELETE",
      fExito: (json) => {
         console.log(json);
         let index = historial.findIndex((el) => el.id == ev.target.dataset.id);
         historial.splice(index, 1);
         renderHistorial(historial);
      },
      fError: (error) => console.log(error),
   });
}
function updateHistorial(historialId) {
   let movimiento = historial.find((el) => el.id == historialId);
    movimiento.estado=!movimiento.estado
   ajax({
      url: `http://localhost:3000/movimientos/${historialId}`,
      mehtod: "PATCH",
      fExito: (json) => {
         console.log(json);
         let movimiento = historial.find((el) => el.id == ev.target.dataset.id);
         movimiento.estado = !movimiento.estado;
         renderHistorial(historial);
      },
      fError: (error) => console.log(error),
      datos: {
         estado:movimiento.estado,
      },
   });
}
function getHistorialId(historialId) {
   ajax({
      url: `http://localhost:3000/movimientos/${historialId}`,
      mehtod: "DELETE",
      fExito: (json) => {
         // let movimiento=historial.find(el=>el.id==historialId)
         $concepto.value = json.concepto;
         $cantidad.value = json.cantidad;
         $form["btn-add"].textContent = "Actualizar transaccion";
         $form["btn-add"].dataset.id = json.id;
         $historial
            .querySelectorAll("i")
            .forEach((i) => i.classList.add("off"));
         $historial.removeEventListener("click", handleClick);
      },
      fError: (error) => console.log(error),
   });
}
function handleClick(ev) {
   if (ev.target.classList.contains("delete-btn")) {
      //DELETE
      deletehistorial(ev.target.dataset.id);
   }
   if (ev.target.classList.contains("hiden-btn")) {
      //PATCH
      updateHistorial(ev.target.dataset.id);
   }
   if (ev.target.classList.contains("modify-btn")) {
      // GET historial concreto:
      getHistorialId(ev.target.dataset.id);
   }
}
$historial.addEventListener("click", handleClick);

function renderHistorial(historial) {
   sessionStorage.setItem("historial", JSON.stringify(historial));
   $historial.innerHTML = historial.reduce(
      (anterior, actual) =>
         anterior +
         `
        <li class="${actual.cantidad > 0 ? "plus" : "minus"}">
            
            ${actual.concepto}
            <!-- Concepto -->
            <span class="${actual.estado ? "" : "tachar"}">${
            actual.cantidad
         }</span>
            <p class="list-btn">
              <i class="fa-solid fa-trash delete-btn" data-id="${
                 actual.id
              }"></i>
              <i class="fa-solid ${
                 actual.estado ? "fa-eye" : "fa-eye-slash"
              } hiden-btn" data-id="${actual.id}"></i>
              <i class="fas fa-undo-alt modify-btn" data-id="${actual.id}"></i>
            </p>
        </li>`,
      ""
   );
   let plus = historial
      .filter((el) => el.estado)
      .filter((el) => el.cantidad > 0)
      .reduce((anterior, actual) => anterior + parseFloat(actual.cantidad), 0);

   $moneyplus.innerHTML = `${plus.toFixed(2)} &euro;`;

   let minus = historial
      .filter((el) => el.estado)
      .filter((el) => el.cantidad < 0)
      .reduce((anterior, actual) => anterior + parseFloat(actual.cantidad), 0);

   $moneyMinus.innerHTML = `${(-minus).toFixed(2)} &euro;`;
   $balance.innerHTML = `${(minus + plus).toFixed(2)} &euro;`;
}
function getHistorial(url) {
   ajax({
      url,
      fExito: (json) => {
        historial.splice(0, historial.length, ...json);
         renderHistorial(historial);
      },
      fError: (error) => console.log(error),
   });
}

$d.addEventListener("DOMContentLoaded", (ev) => {
   let url = "http://localhost:3000/movimientos";
   getHistorial(url);
});
