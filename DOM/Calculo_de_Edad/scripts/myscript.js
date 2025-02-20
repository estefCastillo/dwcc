const $d=document,
$dia=$d.querySelector("#dia")
$mes=$d.querySelector("#mes"),
$anho=$d.querySelector("#anho"),
$button=$d.querySelector("#submit"),
$edad=$d.querySelector("#edad");


$button.addEventListener("click", (ev)=>{
    ev.preventDefault();
    if ($dia.value && $mes.value && $anho.value) {
        const $e=calcularEdad($dia.value,$mes.value,$anho.value);
        if($e<0){
            $edad.innerHTML = `<h2>Señor, usted aún no ha nacido!</h2>`;
        }else{
            $edad.innerHTML = `<h2>${$e} años</h2>`;
        }
    }
})

function calcularEdad(dia,mes,anho) {
    let fecha=new Date(anho,mes-1,dia);
    let actualidad=new Date();
    let edad=actualidad.getFullYear()-fecha.getFullYear();
    if (actualidad.getMonth()<fecha.getMonth() || (actualidad.getMonth() === fecha.getMonth() && actualidad.getDate() < fecha.getDate())) {
        edad--;
    } 

    return edad;
}

