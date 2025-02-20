const $d = document,
   $resultado = $d.querySelector("#resultado"),
   $longitud = $d.querySelector("#longitud"),
   $mayusculas = $d.querySelector("#mayusculas"),
   $minusculas = $d.querySelector("#minusculas"),
   $numeros = $d.querySelector("#numeros"),
   $simbolos = $d.querySelector("#simbolos"),
   $generar = $d.querySelector("#generar"),
   $portapapeles = $d.querySelector("#portapapeles");

const min = "abcdefghijklmnñopqrstuvwxyz".split("");
const may = min.join("").toUpperCase().split("");
const num = "0123456789".split("");
const sim = "-_*/~$<>@".split("");

const aleatorio=(arr)=>arr[Math.floor(Math.random() * arr.length)];

function desordenar(arr) {
   let pwd = [];
   do {
      let i = Math.floor(Math.random() * arr.length); 
      pwd.push(arr[i]);
      arr.splice(i, 1);
   } while (arr.length > 0);
   return pwd;
}

$generar.addEventListener("click", ev=> {
   ev.preventDefault();
   const pwd = [];
   if ($mayusculas.checked || $minusculas.checked || $numeros.checked || $simbolos.checked) {
      do {
         if ($mayusculas.checked && pwd.length<$longitud.value) {pwd.push(aleatorio(may));}
         if ($minusculas.checked && pwd.length<$longitud.value){pwd.push(aleatorio(min));}         
         if ($numeros.checked && pwd.length<$longitud.value) {pwd.push(aleatorio(num));}         
         if ($simbolos.checked && pwd.length<$longitud.value) {pwd.push(aleatorio(sim));}
      } while (pwd.length<$longitud.value);
   }else{
      alert("¡Seleccione al menos una opción!")
   }
   $resultado.innerHTML=desordenar(pwd).join('');
});

$portapapeles.addEventListener("click",ev=>{
   navigator.clipboard.writeText($resultado.textContent).then(()=>alert("Contraseña copiada en el portapapeles"));
})