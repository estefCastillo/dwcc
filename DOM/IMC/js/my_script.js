const $d = document,
    $altura = $d.querySelector("#altura"), 
    $peso = $d.querySelector("#peso"),
    $resultados = $d.querySelector("#resultados"),
    $button = $d.querySelector("button"); 

$button.addEventListener("click", (ev) => {
   ev.preventDefault();
   let $resultado="";

    if ($altura.value && $peso.value) {
        let $imc = ($peso.value / Math.pow($altura.value, 2)).toFixed(2); 
        $resultado=`<h2>IMC : ${$imc} </h2>`
    }else{
        if (!$altura.value) {
            $resultado=`<h2>Introduce una altura válido</h2>`
        } else if(!$peso.value) {
            $resultado=`<h2>Introduce un peso válido</h2>`
        }
    }
    $resultados.innerHTML=$resultado;
});