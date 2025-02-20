const $d = document,
   $hora = $d.querySelector("#hora"),
   $minuto = $d.querySelector("#minuto"),
   $segundo = $d.querySelector("#segundo");

function hora() {
   let actualidad = new Date();
   let hora = actualidad.getHours().toString().padStart(2,"0");
   let minuto = actualidad.getMinutes().toString().padStart(2,"0");
   let segundos = actualidad.getSeconds().toString().padStart(2,"0");

   $hora.innerHTML = `${hora}`;
   $minuto.innerHTML = `${minuto}`;
   $segundo.innerHTML = `${segundos}`;
}
setInterval(hora, 1000);
hora();