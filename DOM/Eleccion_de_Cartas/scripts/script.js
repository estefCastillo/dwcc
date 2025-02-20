const $d=document,
    $cartas=$d.querySelector("#figuras"),
    $form=$d.querySelector("form"),
    $palo=$form.querySelector("#palo"),
    $numero=$form.querySelector("#numero"),
    $addCarta=~$form.querySelector("#addCarta"),
    $delCarta=~$form.querySelector("#delCarta"),
    $ncartas=$form.querySelector("#ncartas"),
    $operaciones=$d.getElementsByName();

const cartas=[];

function renderCartas(cartas) {
    $cartas.innerHTML=cartas.reduce((anterior,actual)=>anterior+`
    <figure>
    <img src='./imagenes/${actual}.png' alt="${actual}">
    
    </figure>`,'');

    $ncartas.innerHTML=cartas.map((carta,i)=>`<option value=${i}>${i+1}</option>`)
}

$addCarta.addEventListener("submit",ev=>{
    ev.preventDefault()

    if(!cartas.includes(`${$palo.value}${$numero.value}`)){

        cartas.push(`${$palo.value}${$numero.value}`)
        renderCartas(cartas)
    }else{
        alert("La carta ya está en la mesa")
    }
})

$delCarta.addEventListener("click",ev=>{
    ev.preventDefault()

    if(cartas.includes(`${$palo.value}${$numero.value}`)){
        let indice=cartas.indexOf(`${$palo.value}${$numero.value}`)
        cartas.splice(indice,1)
        renderCartas(cartas)
    }else{
        alert("No se puede borrar una carta que no está en la mesa")
    }
})

$btnOperar.addEventListener("click",ev=>{
    ev.preventDefault();

    if($insert.checked){
        if(!cartas.includes(`${$palo.value}${$numero.value}`)){
            let indice=cartas.indexOf(`${$palo.value}${$numero.value}`)
            cartas.splice($ncartas.value,0,`${$palo.value}${$numero.value}`)
            renderCartas(cartas)
        }else{
            alert("No se puede insertar una carta que está en la mesa")
        }
    }else{
        if(cartas.includes(`${$palo.value}${$numero.value}`)){
            let indice=cartas.indexOf(`${$palo.value}${$numero.value}`)
            alert("No se puede sustituír la carta")
        }else{
            cartas.splice($ncartas.value,1,`${$palo.value}${$numero.value}`)
            renderCartas(cartas)
        }

    }

})